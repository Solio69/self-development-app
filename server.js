const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

require('dotenv').config()

const server = express()

server.use(logger('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cookieParser())

server.use('/api/user', require('./routes/users'))
server.use('/api/notes', require('./routes/notes'))
server.use('/api/trash', require('./routes/trash'))

module.exports = server
