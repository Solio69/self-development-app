const colors = require('colors')
const { prisma } = require('../prisma/prisma-client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/**
 * @route POST /api/user/login
 * @desc Авторизация
 * @access Public
 */
const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  console.log(colors.blue.bold('login user', user))

  const isUserCorrect =
    user && (await bcrypt.compare(password, user.passwordHash))

  const secret = process.env.JWT_SECRET_KEY

  if (user && isUserCorrect) {
    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
    })
  } else {
    res.status(400).json({ message: 'Invalid credentials' })
  }
}

/**
 * @route POST /api/user/register
 * @desc Регистрация
 * @access Public
 */
const register = async (req, res) => {
  const { email, username, password } = req.body

  if (!email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  const registerUser = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (registerUser) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)

  const user = await prisma.user.create({
    data: {
      email,
      username,
      passwordHash,
    },
  })
  console.log(colors.blue.bold('register user', user))

  const secret = process.env.JWT_SECRET_KEY

  if (user && secret) {
    res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
    })
  } else {
    res.status(400).json({ message: 'Invalid data' })
  }
}

const current = (req, res) => {
  res.send('current')
}

module.exports = {
  login,
  register,
  current,
}
