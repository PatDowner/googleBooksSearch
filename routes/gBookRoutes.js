const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/googlebooks/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(({ data }) => data.items.map(book => ({
      gBookID: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    })))
    .then(apiBook => Book.find()
      .then(book => apiBook.filter(data =>
        book.every(dbData => dbData.gBookID !== data.gBookID))))
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

module.exports = router
