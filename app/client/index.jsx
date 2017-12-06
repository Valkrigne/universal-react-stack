import React from 'react'
import { hydrate } from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import App from 'shared/components'

hydrate(
  <Router>
    <App/>
  </Router>, 
  document.getElementById('main')
)