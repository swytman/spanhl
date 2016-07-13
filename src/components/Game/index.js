import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
var serialize = require('form-serialize');
import * as gameActions from '../../actions/GameActions'
import GameForm from '../GameForm'
import './styles.scss'


export default class Game extends Component {

  componentWillReceiveProps(nextProps) {

    if (nextProps.params.game_id != this.props.params.game_id) {
      this.props.gameActions.getGame(nextProps.params.game_id);
    }
  }

  componentDidUpdate(prevProps){
    if (JSON.stringify(prevProps.payload.game) !== JSON.stringify(this.props.payload.game)){
        this.fillForm(this.props.payload.game);
    }
  }

  fillForm (game) {
    console.log(game);
  }

  handleSaveClick = (e) => {
      e.preventDefault();

      var form = this.refs.game_form;

      var data = serialize(form, { hash: true });
      console.log(data);

      if (this.props.params.game_id === 'new'){
        this.props.gameActions.createGame(data)
      } else {
          console.log('update');
      }


  }

  render() {

    let submitAction;


    return (
      <div>
        <form ref='game_form' className='form-horizontal' role='form'>
          <div className='games-item_home col-sm-5'>
              <legend>Хозяева</legend>
              <GameForm
                teams={this.props.payload.teams}
                submitAction={submitAction}
                prefix='home'
              />
          </div>

          <div className='games-item_guest col-sm-5'>
              <legend>Гости</legend>
              <GameForm
                teams={this.props.payload.teams}
                submitAction={submitAction}
                prefix='guest'
              />
          </div>
          <div className='col-sm-12'>
            <div className='cols-sm-1'>
              <button onClick = {this.handleSaveClick}  className='btn btn-primary'>
                Сохранить
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        payload: state.game
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
