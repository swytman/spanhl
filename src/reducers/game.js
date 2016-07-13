import {
   GET_GAME_REQUEST, GET_GAME_OK, GET_GAME_FAIL,
   GAME_CREATE_REQUEST, GAME_CREATE_OK, GAME_CREATE_FAIL
} from '../constants/Game'

const defaultState = {
    loading: true,
    errors: null,
    game: null,
    teams: []
}

export default function game(state = defaultState, action) {

    switch (action.type) {

        case GET_GAME_REQUEST:
        case GAME_CREATE_REQUEST:
            return {...state, loading: true, errors: null };

        case GET_GAME_OK:
            return { teams:  action.data.teams, game:  action.data.rows[0], loading: false, errors: null }

        case GAME_CREATE_OK:
          return {
              loading: false,
              teams:  action.data.teams,
              game:  action.data.game,
              errors: null
          };

        case GET_GAME_FAIL:
        case GAME_CREATE_FAIL:
            return { ... state, errors: action.errors, loading: false }

        default:
            return state;
    }
}
