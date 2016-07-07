/*eslint-disable*/
import {
    GET_TEAMS_REQUEST, GET_TEAMS_OK, GET_TEAMS_FAIL, SELECT_TEAM,
//    TEAM_DESTROY_REQUEST, TEAM_DESTROY_OK,TEAM_DESTROY_FAIL,
    TEAM_UPDATE_REQUEST, TEAM_UPDATE_OK, TEAM_UPDATE_FAIL
} from '../constants/Team'

import request from 'axios';

export function selectTeam(id){
    return dispatch => {
        dispatch({
          type: 'SELECT_TEAM',
          id: id
        });
    }
}


export function updateTeam(team) {
    return dispatch => {

        dispatch({
            type: 'TEAM_UPDATE_REQUEST'
        });

        request.post(
            '/api/teams',
            team,
            {headers: {'Accept': 'application/json'}}
        )
            .then(result => {
            dispatch({
                type: 'UPDATE_TEAMS_OK',
                data: result.data
            })
        })
        .catch(result => {
            dispatch({
                type: 'UPDATE_TEAMS_FAIL',
                errors: result.statusText
            })
        })
    }
}


export function loadTeams() {
    return dispatch => {

        dispatch({
            type: 'GET_TEAMS_REQUEST'
        });

        request.get(
            '/api/teams',
            {headers: {'Accept': 'application/json'}}
        )
            .then(result => {
            dispatch({
                type: 'GET_TEAMS_OK',
                data: result.data
            })
        })
        .catch(result => {
            dispatch({
                type: 'GET_TEAMS_FAIL',
                errors: result.statusText
            })
        })
    }
}
/*eslint-enable*/
