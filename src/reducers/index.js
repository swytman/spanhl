import { combineReducers } from 'redux'
import teampage from './teampage'
import games from './games'
import game from './game'

export const rootReducer = combineReducers({
   teampage,
   games,
   game
})
