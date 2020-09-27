import React, { useState, savedState, useEffect } from 'react'
import API from '../../utils/API'
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  spacing: 8,
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00b0ff',
    },
    secondary: {
      main: '#f44336',
    }
  },

});

const Saved = () => {
  const classes = useStyles()

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
    <MuiThemeProvider theme={theme}>
      <h1>Your Saved Books</h1>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {
            savedState.saved.length > 0 ? (
              savedState.saved.map(book => (
                <Grid key={book.gBookID} item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <Paper className={classes.paper, classes.spacing} p={0} m={2}>
                          <img src={book.image} alt={book.title} width="100%" />
                        </Paper>
                        <br />
                        <Button href={book.link} target="_blank" variant="contained" color="primary">Link</Button>
                        <br />
                        <br />
                        <Button variant="contained" color="secondary" onClick={() => savedState.handleDeleteSaved(book._id)}>Delete</Button>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography gutterBottom variant="h5" component="h5">
                          {book.title}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="h6">
                          by {book.authors}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {book.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))
            ) : null
          }
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default Saved
