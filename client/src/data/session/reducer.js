import { FETCH_USER_INIT, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './actionTypes'

const initialState = {
  isAuthenticated: false,
  isFeched: false,
  isFetching: false,
  user: {},
  error: null
}

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case (FETCH_USER_INIT):
      return {
        ...state,
        isFetching: true
      }
    case (FETCH_USER_SUCCESS):
      return {
        ...state,
        isAuthenticated: !!action.payload,
        isFeched: true,
        isFetching: false,
        user: {
          googleId: action.payload.googleId,
          credits: action.payload.credits
        }
      }
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
