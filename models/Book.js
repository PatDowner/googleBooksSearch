const { model, Schema } = require('mongoose')

const Book = new Schema({
  gBookID: String,
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String
})

module.exports = model('Book', Book)
