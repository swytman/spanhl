import {
        GET_TEAMS_REQUEST, GET_TEAMS_OK, GET_TEAMS_FAIL, SELECT_TEAM,
//        TEAM_DESTROY_REQUEST, TEAM_DESTROY_OK,TEAM_DESTROY_FAIL,
        TEAM_UPDATE_REQUEST, TEAM_UPDATE_OK, TEAM_UPDATE_FAIL
} from '../constants/Team'

const defaultState = {
    loading: true,
    errors: null,
    teamlist: {
       teams: null,
       selected: null
    }
}

export default function teampage(state = defaultState, action) {
    switch (action.type) {

        case GET_TEAMS_REQUEST:
        case TEAM_UPDATE_REQUEST:
            return { ... state, loading: true };

        case GET_TEAMS_OK:
        case TEAM_UPDATE_OK:
            return { ... state,
                loading: false,
                errors: null,
                teamlist: {
                    teams: action.data,
                    selected: null
                }
            };

        case GET_TEAMS_FAIL:
        case TEAM_UPDATE_FAIL:
            return { ... state, loading: false, errors: action.errors };

        case SELECT_TEAM:
            return { ... state ,
                teamlist: {
                    teams: state.teamlist.teams,
                    selected: action.id
                }
            };

        default:
            return state;
    }
}
