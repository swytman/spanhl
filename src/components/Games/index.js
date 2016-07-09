import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as gamesActions from '../../actions/GamesActions'

export default class Games extends Component {

  componentDidMount() {
    this.props.gamesActions.loadGames(); // Вызываем загрузку
  }

  render() {
    return (
      <div>
        <h4>Список игр</h4>
        <Link to='/games/new'>Создать</Link>
        {this.props.children}
      </div>

    )
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
