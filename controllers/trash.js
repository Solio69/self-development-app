const { prisma } = require('../prisma/prisma-client')
const { ERROR_MESSAGES } = require('./constants')

/**
 * @route GET /api/trash
 * @desc Get all not active elements
 * @access Private
 */
const getTrash = async (req, res) => {
  const { id: userId } = req.user

  try {
    //TODO: Добавить новые таблицы по которым надо получать удаленные сущности (например ['note', 'task'])
    const [notes] = await Promise.all([
      prisma.note.findMany({
        where: {
          userId,
          isArchived: true,
        },
        select: {
          id: true,
          title: true,
          text: true,
          updatedAt: true,
          isArchived: true,
        },
      }) || [],
    ])

    res.status(200).json({
      notes,
    })
  } catch (error) {
    console.error(ERROR_MESSAGES.trashError, error)
    res.status(500).json({ error: ERROR_MESSAGES.serverError })
  }
}

module.exports = {
  getTrash,
}
