import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><NavLink onlyActiveOnIndex={true} to='/'>Команды</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
