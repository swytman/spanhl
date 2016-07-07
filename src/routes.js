import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import TeamPage from './components/TeamPage'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={TeamPage} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
