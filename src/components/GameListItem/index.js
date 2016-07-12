import React, { Component } from 'react'
import { Link } from 'react-router'


export default class GameListItem extends Component {
    render() {
        var game = this.props.game;
        return (
            <div>
                <Link to={`/games/${game.id}`}>
                    {game.guest_id} - {game.home_id}
                </Link>
            </div>
        )
    }
}
