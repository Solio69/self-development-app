const colors = require('colors')
const { prisma } = require('../prisma/prisma-client')
const { ERROR_MESSAGES } = require('./constants')

/**
 * @route GET /api/notes/
 * @desc Get all notes
 * @access Private
 */

const getNotes = async (req, res) => {
  const { id } = req.params

  console.log(colors.blue.bold('user is', id))

  res.status(200).json({ message: 'getNotes' })
}

/**
 * @route POST /api/notes/
 * @desc Create note
 * @access Private
 */
const createNote = async (req, res) => {
  try {
    const {
      body: { title = null, text = null },
      user: { id: userId = null },
    } = req

    if (!text) {
      return res.status(400).json({
        error: ERROR_MESSAGES.NOTE_TEXT_REQUIRED,
      })
    }

    const note = await prisma.note.create({
      data: {
        userId,
        title: title,
        text: text,
        isArchived: false,
      },
    })

    res.status(201).json(note)
  } catch (error) {
    console.error(ERROR_MESSAGES.noteNotCreated, error)
    res.status(500).json({ error: ERROR_MESSAGES.serverError })
  }
}

module.exports = {
  getNotes,
  createNote,
}
