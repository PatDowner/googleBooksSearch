import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Link } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
}))

const Navbar = () => {
  const classes = useStyles()

  const [openState, setOpen] = useState({
    open: false
  })

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setOpen({ ...openState, open })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* For the hamburger icon drop down menu. Hidden on screens small and larger */}
          <Hidden smUp>
            {/* Makes icon function like a button */}
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)} >
              {/* Icon */}
              <MenuIcon />
            </IconButton>
            {/* Controls the drop down menu */}
            <Drawer
              // drops in from the top
              anchor="top"
              open={openState.open}
              onClose={toggleDrawer(false)}
            >
              {/* links in the drop down menu */}
              <List>
                <ListItem>
                  <Link to="/">
                    <Button onClick={toggleDrawer(false)}>Home</Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/saved">
                    <Button onClick={toggleDrawer(false)}>Saved</Button>
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          {/* App name */}
          <Typography variant="h6" className={classes.title}>
            GoogleBooks Search
          </Typography>

          {/* Links on navbar that are visible from screens small and larger */}
          <Hidden xsDown>
            <Link to="/" className={classes.link}>
              <Button color="inherit">
                Home
          </Button>
            </Link>
            <Link to="/saved" className={classes.link}>
              <Button color="inherit">
                Saved
          </Button>
            </Link>
          </Hidden>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
