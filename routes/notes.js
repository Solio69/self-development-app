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
  deleteNote,
} = require('../controllers/notes')

// GET /api/notes/
router.get('/', auth, getNotes)

// GET /api/notes/:id
router.get('/:id', auth, getNote)

// POST /api/notes/
router.post('/', auth, createNote)

// PATCH /api/notes/:id
router.patch('/:id', auth, toggleArchiveNote)

// PUT /api/notes/:id
router.put('/:id', auth, updateNote)

// DELETE /api/notes/:id
router.delete('/:id', auth, deleteNote)

module.exports = router
