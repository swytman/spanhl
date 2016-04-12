import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><NavLink to='/admin' activeClassName='active'>Админка</NavLink></li>
          <li><NavLink to='/list' activeClassName='active'>Список жанров</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
