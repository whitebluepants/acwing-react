import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';

const f1 = (state = 0, action) => {
  switch(action.type) {
    case 'add':
      return state + action.value;
    case 'sub':
      return state - action.value;
    default:
      return state;
  }
}

const f2 = (state = ":", action) => {
  switch(action.type) {
    case 'concat':
      return state + action.character;
    default:
      return state; 
  }
}

const f3 = combineReducers({
  number: f1,
  string: f2,
});


const store = configureStore({
  reducer: f3,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App></App>
  </Provider>
);