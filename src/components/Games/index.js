import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as gamesActions from '../../actions/GamesActions'
import './styles.scss'

export default class Games extends Component {

  componentDidMount() {
    this.props.gamesActions.loadGames(); // Вызываем загрузку
  }

  render() {
    return (
    <div>
      <div className='row'>
        <div className='games-list col-sm-4'>
            <span className='games-list_title'>Список игр</span>
            <Link to='/games/new'>
                <button className='btn btn-xs btn-primary'>
                    <span className='glyphicon glyphicon-plus' aria-hidden='true' />
                </button>
            </Link>
        </div>
        <div className='col-sm-8'>
          {this.props.children}
        </div>
      </div>
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
