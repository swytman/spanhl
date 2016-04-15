import React, { Component, PropTypes } from 'react'

export default class Login extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.onLoginClick({name: e.target.elements[0].value})
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <form className='form-inline' onSubmit={::this.handleSubmit}>
            <input className='form-control' type='text' placeholder='login'/>{' '}
            <button className='btn btn-primary' type='submit'>Войти</button>
          </form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired
}
