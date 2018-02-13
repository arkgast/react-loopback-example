import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import importedComponent from 'react-imported-component'

import store, { history } from './configureStore'
import App from './scenes/App'
import LinearBuffer from './components/LinearBuffer'

const Home = importedComponent(() => import('./scenes/Home'), {
  LoadingComponent: () => <LinearBuffer />
})
const SignIn = importedComponent(() => import('./scenes/SignIn'), {
  LoadingComponent: () => <LinearBuffer />
})

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App>
            <Route path='/' exact component={Home} />
            <Route path='/sign-in' exact component={SignIn} />
          </App>
        </ConnectedRouter>
      </Provider>
    )
  }
}
