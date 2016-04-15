import {
  POPUP_SHOW,
  POPUP_HIDE
} from '../constants/Popup'

export function show() {
  return {
    type: POPUP_SHOW
  }
}

export function hide() {
  return {
    type: POPUP_HIDE
  }
}
