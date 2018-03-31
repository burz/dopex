import App from './App'
import Home from './layouts/Home'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {
      Redirect
    , Router
    , Route
    , IndexRoute
    , browserHistory
  } from 'react-router'
import store from './store'
import { syncHistoryWithStore } from 'react-router-redux'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
