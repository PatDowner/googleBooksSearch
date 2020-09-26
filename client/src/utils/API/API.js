import axios from 'axios'

const API = {
  getBook: search => axios.get(`/api/googlebooks/${search}`),
  getSavedBook: () => axios.get('/api/book'),
  saveBook: book => axios.post('/api/book', book),
  deleteBook: id => axios.delete(`/api/book/${id}`)
}

export default API
