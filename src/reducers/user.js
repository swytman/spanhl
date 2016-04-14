import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {}

export default function userstate(state = initialState, action) {
  let nextState

  switch (action.type) {
  case LOGIN_SUCCESS:
    nextState = action.payload;
    return nextState

  case LOGOUT_SUCCESS:
    return {}

  default:
    return state
  }
}
