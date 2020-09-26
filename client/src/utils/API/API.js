import axios from 'axios'

const API = {
  getBook: search => axios.get(`/api/googlebooks/${search}`),
  getSavedBook: () => axios.get('/api/books'),
  saveBook: book => axios.post('/api/books', book),
  deleteBook: id => axios.delete(`/api/books/${id}`)
}

export default API
