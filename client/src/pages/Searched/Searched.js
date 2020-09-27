import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BookContext from '../../utils/BookContext'
import Typography from '@material-ui/core/Typography'
import Form from '../../components/Form'
import Book from '../../components/Book'
import Grid from '@material-ui/core/Grid'
import API from '../../utils/API'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Searched = () => {
  const classes = useStyles();

  const [bookState, setBookState] = useState({
    search: '',
    book: []
  })

  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  bookState.handleGBSearch = event => {
    event.preventDefault()
    API.getBook(bookState.search)
      .then(({ data }) => {
        setBookState({ ...bookState, book: data, search: '' })
      })
      .catch(err => console.error(err))
  }

  bookState.handleSaveBook = gBookID => {
    console.log(bookState.book)
    const saveBook = bookState.book.filter(x => x.gBookID === gBookID)[0]
    API.saveBook(saveBook)
      .then(() => {
        const book = bookState.book.filter(x => x.gBookID !== gBookID)
        setBookState({ ...bookState, book })
      })
  }

  return (
    <>
      <Typography variant="h6">
        Search GoogleBooks:
      </Typography>
      <BookContext.Provider value={bookState}>
        <Form />
        <div className={classes.root}>
          <Grid container spacing={3}>
            {
              bookState.book.length > 0 ? (
                bookState.book.map(book => (
                  <Book
                    key={book.gBookID}
                    book={book}
                    handleSaveBook={bookState.handleSaveBook} />
                ))
              ) : null
            }
          </Grid>
        </div>
      </BookContext.Provider>
    </>
  )
}

export default Searched