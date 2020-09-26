import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  book: {
    height: 140,
  },
})

const Book = props => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.book}
        image={props.book.image}
        title={props.book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.book.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Authors: {props.book.authors}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Description: {props.book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => props.handleSaveBook(props.book.imdbID)}>
          Save
        </Button>
      </CardActions>
    </Card>
  )
}

export default Book
