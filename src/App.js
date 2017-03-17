import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import reducer from './reducers';
import Main from './component'

class App extends Component{
  render() {
    // const logger = createLogger()
    // const store = createStore(reducer, {}, applyMiddleware(logger))
    return (
      <View>
        <Main />
      </View>
    )
  }
}

export default App;