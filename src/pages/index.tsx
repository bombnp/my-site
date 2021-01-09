import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './landing'

const PageRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  )
}

export default PageRouter
