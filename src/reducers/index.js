import { combineReducers } from 'redux'
import user from './user'
import popup from './popup'

const rootReducer = combineReducers({
  user,
  popup
})

export default rootReducer
