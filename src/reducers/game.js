import {
   GET_GAME_REQUEST, GET_GAME_OK, GET_GAME_FAIL
} from '../constants/Game'

const defaultState = {
    loading: true,
    game: null,
    teams: []
}

export default function game(state = defaultState, action) {

    switch (action.type) {

        case GET_GAME_REQUEST:
            return { loading: true, game: null, teams: [] };

        case GET_GAME_OK:
            return { teams:  action.data.teams, game:  action.data.game, loading: false }

        case GET_GAME_FAIL:
            return { ... state, errors: action.errors, loading: false }

        default:
            return state;
    }
}
