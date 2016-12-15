import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from './App';
import './index.css';
import {createStore} from 'redux';
import 'react-bootstrap';
import {Provider} from 'react-redux';
import reducer from './reducer';
import thunkMiddleWare from 'redux-thunk';
import createLogger from 'redux-logger';
import {applyMiddleware} from 'redux';
import {fetchPosts} from './action_creators';

const loggerMiddleware = createLogger();



const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleWare,
    loggerMiddleware
  )
);


store.dispatch(fetchPosts());


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
