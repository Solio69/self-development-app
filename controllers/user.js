const colors = require('colors')
const { prisma } = require('../prisma/prisma-client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { ERROR_MESSAGES, TOKEN_EXPIRATION } = require('./constants')

/**
 * @route POST /api/user/login
 * @desc Authorization
 * @access Public
 */
const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: ERROR_MESSAGES.allFieldsRequired })
  }

  try {
    const user = await prisma.user.findFirst({
      where: { email },
    })

    const isUserCorrect =
      user && (await bcrypt.compare(password, user.passwordHash))
    const secret = process.env.JWT_SECRET_KEY

    if (user && isUserCorrect) {
      res.status(200).json({
        id: user.id,
        username: user.username,
        email: user.email,
        token: jwt.sign({ id: user.id }, secret, {
          expiresIn: TOKEN_EXPIRATION,
        }),
      })
    } else {
      res.status(400).json({ message: ERROR_MESSAGES.invalidCredentials })
    }
  } catch (error) {
    console.error(colors.red.bold(ERROR_MESSAGES.loginError), error)
    res.status(500).json({ message: ERROR_MESSAGES.serverError })
  }
}

/**
 * @route POST /api/user/register
 * @desc Registration
 * @access Public
 */
const register = async (req, res) => {
  const { email, username, password } = req.body

  if (!email || !username || !password) {
    return res.status(400).json({ message: ERROR_MESSAGES.allFieldsRequired })
  }

  try {
    const registerUser = await prisma.user.findFirst({
      where: { email },
    })

    if (registerUser) {
      return res.status(400).json({ message: ERROR_MESSAGES.userAlreadyExists })
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = await prisma.user.create({
      data: { email, username, passwordHash },
    })

    const secret = process.env.JWT_SECRET_KEY

    if (user && secret) {
      res.status(201).json({
        id: user.id,
        username: user.username,
        email: user.email,
        token: jwt.sign({ id: user.id }, secret, {
          expiresIn: TOKEN_EXPIRATION,
        }),
      })
    } else {
      res.status(400).json({ message: ERROR_MESSAGES.invalidData })
    }
  } catch (error) {
    console.error(colors.red.bold(ERROR_MESSAGES.registrationError), error)
    res.status(500).json({ message: ERROR_MESSAGES.serverError })
  }
}

/**
 * @route GET /api/user/current
 * @desc Get current user
 * @access Private
 */
const current = (req, res) => {
  res.status(200).json(req.user)
}

module.exports = {
  login,
  register,
  current,
}
