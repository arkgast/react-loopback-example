import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { LinearProgress } from 'material-ui/Progress'

const styles = {
  root: {
    backgroundColor: '#fff',
    flex: 1,
    opacity: 0.5
  }
}

class LinearBuffer extends Component {
  state = {
    completed: 0,
    buffer: 10
  }
  progress = () => {
    const { completed } = this.state
    if (completed > 100) {
      this.setState({ completed: 0, buffer: 10 })
    } else {
      const diff = Math.random() * 10
      const diff2 = Math.random() * 10
      this.setState({
        completed: completed + diff,
        buffer: completed + diff + diff2
      })
    }
  }
  componentDidMount () {
    this.timer = setInterval(this.progress, 500)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render () {
    const { classes } = this.props
    const { completed, buffer } = this.state
    return (
      <div className={classes.root}>
        <LinearProgress color='secondary' mode='buffer' value={completed} valueBuffer={buffer} />
      </div>
    )
  }
}

LinearBuffer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LinearBuffer)
