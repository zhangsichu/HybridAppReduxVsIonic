import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import App from './containers/App'
import Home from './containers/Home'
import Features from './containers/Features'
import Posts from './containers/Posts'
import Static from './containers/Static'

import getStoreInstance from './store/configureStore'

import 'file?name=[name].[ext]!../icon.png'
import '../config.xml'

document.addEventListener('deviceready', () => {}, false)

ReactDOM.render(
  <div>
    <Provider store={getStoreInstance()}>
      <Router history={hashHistory}>
        <Route component={App}>
          <IndexRoute component={Home}/>
          <Route path='/home' component={Home} />
          <Route path='/posts(/:id)' component={Posts} />
          <Route path='/features(/:phrase)' component={Features} />
          <Route path='/static/:type' component={Static} />
          <Redirect from='/' to='/home' />
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
)
