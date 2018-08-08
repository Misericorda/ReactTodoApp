import React from 'react';
import {Provider} from 'react-redux'
import {hot} from 'react-hot-loader';
import AppRouter from './router/index.jsx';

const App = props => (
  <Provider store={props.store}>
    <AppRouter/>
  </Provider>
);

export default module.hot ? hot(module)(App) : App