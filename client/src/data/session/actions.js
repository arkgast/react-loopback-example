import axios from 'axios'
import { FETCH_USER_INIT, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './actionTypes'

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER_INIT })
    const res = await axios.get('/api/current_user')

    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data })
  } catch (err) {
    dispatch({ type: FETCH_USER_ERROR, err: err })
  }
}
