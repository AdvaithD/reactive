import React, { Component } from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'
class App extends Component {
  render () {
    return (
      <Router history={history}>
        <div className='center w85'>
          <Header />
          <div className='ph3 pv1 background-gray'>
            <Switch>
              <Route exact path='/' component={LinkList} />
              <Route exact path='/create' component={CreateLink} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
