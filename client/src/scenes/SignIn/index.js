import { connect } from 'react-redux'

import SignIn from './SignIn'
import { signIn, fetchUser } from 'Data/session/actions'

const mapStateToProps = (state) => {
  const { user } = state.data
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: async (username, password) => dispatch(signIn(username, password)),
    fetchUser: async () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
