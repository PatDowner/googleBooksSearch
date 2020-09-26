import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import Button from '@material-ui/core/Button'

const Saved = () => {

  const [savedState, setSavedState] = useState({
    saved: []
  })

  savedState.handleDeleteSaved = id => {
    API.deleteBook(id)
      .then(() => {
        let saved = savedState.saved.filter(book => book._id !== id)
        setSavedState({ ...savedState, saved })
      })
  }

  useEffect(() => {
    API.getSavedBook()
      .then(({ data }) => {
        setSavedState({ ...savedState, saved: data })
      })
  }, [])

  return (
    <>
      <h1>Your saved books</h1>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(book => (
            <div key={book.gBookID}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <h4>Authors: {book.authors}</h4>
              <p>Description: {book.description}</p>
              <Button href={book.link} target="_blank">Link</Button>
              <Button onClick={() => savedState.handleDeleteSaved(book._id)}>Delete</Button>
            </div>
          ))
        ) : null
      }
    </>
  )
}

export default Saved
