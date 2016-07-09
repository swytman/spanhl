import { combineReducers } from 'redux'
import teampage from './teampage'
import games from './games'

export const rootReducer = combineReducers({
   teampage,
   games
})
