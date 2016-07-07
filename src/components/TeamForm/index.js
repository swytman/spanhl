import React, { Component } from 'react'
import './styles.scss'


export default class Team extends Component {


    render() {

        var team = this.props.team;

        let klass;
        if (this.props.selected) {
            klass = 'selected'
        }


        return (
            <div>
                <p
                className = {klass}
                onClick = {this.props.teamClick.bind(this, team.id)}>{team.id}. {team.title}</p>
            </div>
            )
    }
}

