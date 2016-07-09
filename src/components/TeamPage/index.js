import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TeamList from '../../components/TeamList'
import TeamForm from '../../components/TeamForm'
import * as teamActions from '../../actions/TeamActions'

export default class TeamPage extends Component {
    componentDidMount() {
      this.props.teamActions.loadTeams(); // Вызываем загрузку
    }

    render() {

        const teamlist = this.props.teampage.teamlist;
        var teamClick = this.props.teamActions.selectTeam;
        var updateTeam = this.props.teamActions.updateTeam;
        var createTeam = this.props.teamActions.createTeam;
        var destroyTeam = this.props.teamActions.destroyTeam;

        return (
            <div>
                <h4>Список команд</h4>
                <TeamForm
                  updateTeam = {updateTeam}
                  destroyTeam = {destroyTeam}
                  createTeam = {createTeam}
                  teamlist={teamlist}/>
                <TeamList
                  teamClick = {teamClick}
                  teamlist={teamlist}/>
            </div>
        )
    }


}


function mapStateToProps(state) {
    return {
        teampage: state.teampage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        teamActions: bindActionCreators(teamActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
