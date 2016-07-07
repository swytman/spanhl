import React, { Component } from 'react'
import Team from '../../components/Team'

export default class TeamList extends Component {


    render() {
        var teamClick = this.props.teamClick;
        var selected = this.props.teamlist.selected

        return (

            <div className='row'>
                <ul>
                    {this.props.teamlist.teams.map(function(team) {
                        return <Team
                            key={team.id}
                            team={team}
                            selected = {team.id === selected}
                            teamClick={teamClick}

                        />;
                    } ) }
                </ul>
            </div>
        )
    }
}
