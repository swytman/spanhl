import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

export function login(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  }
}
