import React, { Component, PropTypes } from 'react'
import Login from '../Login'
import './styles.scss'

export default class Popup extends Component {
  render() {
    return (
      <div className={'popup ' + (this.props.isOpen ? '': 'none')}>
        <div className='row'>
          <div className='col-md-12'>
            <div className='pull-right'>
              <i className='glyphicon glyphicon-remove-circle popup__close' onClick={this.props.onCloseClick}></i>
            </div>
          </div>
        </div>
        <Login onLoginClick={this.props.onLoginClick} />
      </div>
    )
  }
}

Popup.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}
