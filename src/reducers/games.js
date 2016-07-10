import {
        GET_GAMES_REQUEST, GET_GAMES_OK, GET_GAMES_FAIL,
        GET_GAME_REQUEST, GET_GAME_OK, GET_GAME_FAIL
} from '../constants/Game'

const defaultState = {
    loading: true,
    errors: null,
    games: [],
    game: null
}

export default function games(state = defaultState, action) {

    switch (action.type) {

        case GET_GAME_REQUEST:
          return { ... state, loading: true, game: null };
        case GET_GAMES_REQUEST:
          return { ... state, loading: true };

        case GET_GAMES_OK:
          return { ... state, loading: false, errors: null, games:  action.data }
        case GET_GAME_OK:
          return { ... state, loading: false, errors: null, game:  action.data }

        case GET_GAME_FAIL:
        case GET_GAMES_FAIL:
          return { ... state, loading: false, errors: action.errors };

        default:
            return state;
    }
}
