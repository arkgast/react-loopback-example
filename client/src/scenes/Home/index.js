import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import Styles from 'Styles/base'

const styles = (theme) => {
  const styles = Styles(theme)
  return {
    page: {
      ...styles.page
    }
  }
}

let Home = ({ classes }) => {
  return (
    <div className={classes.page}>
      <Typography variant='display3'>Home</Typography>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
