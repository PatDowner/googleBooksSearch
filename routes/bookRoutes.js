const router = require('express').Router()
const { Book } = require('../models')

router.get('/books', (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => console.log(err))
})

router.post('/books', (req, res) => {
  Book.create(req.body)
    .then(books => res.json(books))
    .catch(err => console.log(err))
})

router.delete('/books/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(books => books.remove())
    .then(books => res.json(books))
    .catch(err => console.log(err))
})

module.exports = router
