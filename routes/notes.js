const express = require('express')
const colors = require('colors')
const { auth } = require('../middleware/auth')
const router = express.Router()
const { getNotes } = require('../controllers/notes')

// ./api/notes/
router.get('/', auth, getNotes)

// ./api/notes/
router.post('/', auth, () => {
  console.log(colors.red.bold('add'))
})

// ./api/notes/:id
router.get('/:id', auth, () => {
  console.log(colors.red.bold('id'))
})

// ./api/notes/:id
router.put('/:id', auth, () => {
  console.log(colors.red.bold('update'))
})

// ./api/notes/:id
router.delete('/:id', auth, () => {
  console.log(colors.red.bold('delete'))
})

module.exports = router
