import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Reducers from './redux/Reducers';
import App from './components/App';

const reducers = combineReducers(Reducers);
const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
