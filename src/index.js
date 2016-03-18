import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import NotFound from './components/NotFound'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='admin' component={Admin} />
      <Route path='genre' component={Genre} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>,
  document.getElementById('root')
)
