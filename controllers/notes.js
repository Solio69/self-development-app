const colors = require('colors')
const { prisma } = require('../prisma/prisma-client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { ERROR_MESSAGES, TOKEN_EXPIRATION } = require('./constants')

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

module.exports = {
  getNotes,
}
