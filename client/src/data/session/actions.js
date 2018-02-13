import axios from 'axios'
import universalCookies from 'universal-cookie'

import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR
} from './actionTypes'

const cookies = new universalCookies()

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER_REQUEST })
    const accessToken = cookies.get('access_token')
    const res = await axios.get(`/api/products?access_token=${accessToken}`, { withCredentials: true })
    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data })
  } catch (err) {
    dispatch({ type: FETCH_USER_ERROR, error: err })
  }
}

export const signIn = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_IN_REQUEST })
    const res = await axios.post('/api/Users/login', {
      username,
      password
    })
    cookies.set('access_token', res.data.id, { path: '/', maxAge: 60 * 60 * 24 * 7 })
    dispatch({ type: SIGN_IN_SUCCESS, payload: res.data })
  } catch (err) {
    dispatch({ type: SIGN_IN_ERROR, error: err })
  }
}
