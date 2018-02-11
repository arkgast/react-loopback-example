import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import MenuItem from './components/MenuItem'
import styles from './styles'

class App extends Component {
  renderMenu () {
    const { session } = this.props
    if (session.isAuthenticated) {
      return [
        <Button key='1' href='#'>Logout</Button>
      ]
    } else {
      return [
        <Button key='1' href='#'>Login</Button>
      ]
    }
  }
  render () {
    const { children, classes } = this.props
    return (
      <div className={classes.fullScreen}>
        <AppBar position='static'>
          <Toolbar>
            <Typography type='title' color='inherit' style={{ flex: 1 }}>
              <MenuItem to='/' activeOnlyWhenExact={false} label='Super App' />
            </Typography>
            {this.renderMenu()}
          </Toolbar>
        </AppBar>
        <div className={classes.pageContainer}>
          {children}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
