import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as gameActions from '../../actions/GameActions'
import game_template from './form'
import './styles.scss'


export default class Game extends Component {

  componentDidMount() {
    this.props.gameActions.getGame(this.props.params.game_id);
  }

  render() {

    return (
      <div>

        <div className='games-item_home col-sm-5'>
            <legend>Хозяева</legend>
            {game_template()}
        </div>

        <div className='games-item_guest'>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        game: state.game
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)