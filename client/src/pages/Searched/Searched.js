import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BookContext from '../../utils/BookContext'
import Typography from '@material-ui/core/Typography'
import Form from '../../components/Form'
import Book from '../../components/Book'
import Grid from '@material-ui/core/Grid'
import API from '../../utils/API'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#673ab7',
    },
  },
});

const Searched = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false)

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
    const saveBook = bookState.book.filter(x => x.gBookID === gBookID)[0]
    API.saveBook(saveBook)
      .then(() => {
        const book = bookState.book.filter(x => x.gBookID !== gBookID)
        setBookState({ ...bookState, book })
      })
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <>
      <Typography variant="h6">
        Search GoogleBooks:
      </Typography>
      <BookContext.Provider value={bookState}>
        <Form />
        <MuiThemeProvider theme={theme}>
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
              <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  Book saved!
        </Alert>
              </Snackbar>
            </Grid>
          </div>
        </MuiThemeProvider>
      </BookContext.Provider>
    </>
  )
}

export default Searched