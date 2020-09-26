import React, { createContext } from 'react'

const BookContext = createContext({
  search: '',
  book: [],
  handleInputChange: () => { },
  handleGBSearch: () => { },
  handleSaveBook: () => { }
})

export default BookContext
