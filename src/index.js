import * as React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import Home from './pages/Home'
import Details from './pages/Details'
import Listings from './pages/Listings'
import NotFound from './pages/NotFound'

if (module.hot) {
  module.hot.accept()
}

render(
  <Router>
    <Home path="/" />
    <Details path="/details/:propertyId" />
    <Listings path="/listings"/>
    <NotFound default />
  </Router>,
  document.getElementById('root')
)
