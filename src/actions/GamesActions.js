/*eslint-disable*/
import {
        GET_GAMES_REQUEST, GET_GAMES_OK, GET_GAMES_FAIL
} from '../constants/Game'

import request from 'axios';

export function loadGames() {
    return dispatch => {

        dispatch({
            type: 'GET_GAMES_REQUEST'
        });

        request.get(
            '/api/games',
            {headers: {'Accept': 'application/json'}}
        )
            .then(result => {
            dispatch({
                type: 'GET_GAMES_OK',
                data: result.data
            })
        })
        .catch(result => {
            dispatch({
                type: 'GET_GAMES_FAIL',
                errors: result.statusText
            })
        })
    }
}
/*eslint-enable*/
