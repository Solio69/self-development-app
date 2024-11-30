const express = require('express')
const colors = require('colors')
const { auth } = require('../middleware/auth')
const router = express.Router()
const {
  getNotes,
  getNote,
  createNote,
  toggleArchiveNote,
  updateNote,
} = require('../controllers/notes')

// ./api/notes/
router.get('/', auth, getNotes)

// ./api/notes/:id
router.get('/:id', auth, getNote)

// ./api/notes/
router.post('/', auth, createNote)

// PATCH /api/notes/:id
router.patch('/:id', auth, toggleArchiveNote)

// PUT /api/notes/:id
router.put('/:id', auth, updateNote)

// ./api/notes/:id
router.delete('/:id', auth, () => {
  console.log(colors.red.bold('delete'))
})

module.exports = router
