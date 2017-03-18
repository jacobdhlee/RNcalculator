import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import reducer from './reducers';
import Main from './component/Main'

class App extends Component {
  render() {
    const logger = createLogger()
    const store = createStore(reducer, {}, applyMiddleware(logger))
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App;