/*eslint-disable*/
import {
    GET_GAME_REQUEST, GET_GAME_OK, GET_GAME_FAIL,
    GAME_CREATE_REQUEST, GAME_CREATE_OK, GAME_CREATE_FAIL
} from '../constants/Game'

import request from 'axios';

export function getGame(id) {
    return dispatch => {

        dispatch({
            type: GET_GAME_REQUEST
        });

        request.get(
            '/api/games/' + id,
            {headers: {'Accept': 'application/json'}}
        )
            .then(result => {
            dispatch({
                type: GET_GAME_OK,
                data: result.data
            })
        })
    .catch(result => {
            dispatch({
                type: GET_GAME_FAIL,
                errors: result.statusText
            })
        })
    }
}

export function createGame(game) {
    return dispatch => {

        dispatch({
            type: GAME_CREATE_REQUEST
        });

        request.post(
            '/api/games',
            game,
            {headers: {'Accept': 'application/json'}}
        )
            .then(result => {
            dispatch({
                type: GAME_CREATE_OK,
                data: result.data
            })
            window.ee.emit('GAMESLIST.UPDATE_REQUIRED');
        })
        .catch(result => {
            dispatch({
                type: GAME_CREATE_FAIL,
                errors: result.statusText
            })
        })
    }
}

/*eslint-enable*/
