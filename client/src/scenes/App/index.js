import { connect } from 'react-redux'

import * as actions from 'Data/session/actions'
import App from './App'

const mapStateTopProps = (state) => {
  const { session } = state.data
  const { location } = state.router
  return {
    location,
    session
  }
}

export default connect(mapStateTopProps, actions)(App)
