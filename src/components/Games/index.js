import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as gamesActions from '../../actions/GamesActions'
import Game from '../Game'

export default class Games extends Component {

  componentDidMount() {
    this.props.gamesActions.loadGames(); // Вызываем загрузку
  }

  render() {
    if (!this.props.params || !this.props.params.game_id) {
      return (
        <div>
          <h4>Список игр</h4>
          <Link to='/games/new'>Создать</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to='/games'>К списку игр</Link>
          <Game
            id={this.props.params.game_id}
            getGame={this.props.gamesActions.getGame()}
          />
        </div>
      )
    }
  }

}


function mapStateToProps(state) {
    return {
        games: state.games
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gamesActions: bindActionCreators(gamesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)
