import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
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


const Book = props => {
  const classes = useStyles()

  return (

    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className={classes.paper, classes.spacing} p={0} m={2}>
              <img src={props.book.image} width="100%" />
            </Paper>
            <br />
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => props.handleSaveBook(props.book.gBookID)}>
              Save
            </Button>
          </Grid>
          <Grid item xs={9}>
            <Typography gutterBottom variant="h5" component="h5">
              {props.book.title}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="h6">
              by {props.book.authors}
            </Typography>
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
