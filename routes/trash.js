const express = require('express')
const { auth } = require('../middleware/auth')
const router = express.Router()
const { getTrash } = require('../controllers/trash')

router.get('/', auth, getTrash)

module.exports = router
