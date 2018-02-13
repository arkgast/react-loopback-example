import React, { PureComponent } from 'react'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

import styles from './styles'

class SignIn extends PureComponent {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.page}>
        <Paper>
          <Button
            color='secondary'
            variant='raised'
            onClick={() => {
              this.props.signIn('arnold', 'arnold')
            }}
          >
            Sign in
          </Button>
          <Button onClick={this.props.fetchUser}>Fetch products</Button>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(SignIn)
