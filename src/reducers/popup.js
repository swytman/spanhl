import {
  POPUP_SHOW,
  POPUP_HIDE
} from '../constants/Popup'

const initialState = {
  isOpen: false
}

export default function popupstate(state = initialState, action) {
  let nextState;

  switch (action.type) {
  case POPUP_SHOW:
    return { ...nextState, isOpen: true }

  case POPUP_HIDE:
    return { ...nextState, isOpen: false }

  default:
    return state
  }
}
