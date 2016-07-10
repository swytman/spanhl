import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

export default class Game extends Component {
  componentDidMount() {
    if (typeof parseInt(this.props.params.game_id) == 'number') {
      alert(123);

    }
  }


  render() {
    return (
      <div>
        <h4>Игра</h4>
      </div>
    )
  }
}
