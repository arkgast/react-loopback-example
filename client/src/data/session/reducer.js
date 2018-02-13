import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR
} from './actionTypes'

const initialState = {
  isAuthenticated: false,
  isFeched: false,
  isFetching: false,
  user: {},
  error: null
}

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case SIGN_IN_SUCCESS:
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload,
        isFeched: true,
        isFetching: false,
        user: action.payload
      }
    case SIGN_IN_ERROR:
    case (FETCH_USER_ERROR):
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}
