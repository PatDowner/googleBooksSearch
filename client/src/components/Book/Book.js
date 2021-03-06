import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

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
      main: '#4caf50',
    },
    secondary: {
      main: '#673ab7',
    },
  },
});


const Book = props => {
  const classes = useStyles()

  return (


    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {/* left bar of each book card */}
          <Grid item xs={3}>
            <Paper className={classes.paper, classes.spacing} p={0} m={2}>

              {/* Book cover image */}
              <img src={props.book.image} alt={props.book.title} width="100%" />
            </Paper>

            {/* View details link */}
            <Box mt={1}>
              <Button href={props.book.link} target="_blank" variant="contained" color="secondary" size="small">Link</Button>
            </Box>

            {/* Save button */}
            <Box mt={1}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => props.handleSaveBook(props.book.gBookID)}>
                Save</Button>
            </Box>

          </Grid>

          {/* Right side of each book card */}
          <Grid item xs={9}>

            {/* book title */}
            <Typography gutterBottom variant="h5" component="h5">
              {props.book.title}
            </Typography>

            {/* author(s) */}
            <Typography variant="h6" color="textSecondary" component="h6">
              by {props.book.authors}
            </Typography>

            {/* Book description */}
            <Typography variant="body2" color="textSecondary" component="p">
              {props.book.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Book
