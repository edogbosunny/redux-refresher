import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';


const personReducer = (state = {}, actions) => {
  if (actions.type === 'UPDATE_NAME') {
    return { name: actions.payload }
  }
  // reducre returns our state
  return state
}

const gameReducer = (state = {}, actions) => {
  if (actions.type === 'UPDATE_GAME') {
    return { name: actions.payload }
  }
  return state
}

const allReducers = combineReducers({ game: gameReducer, person: personReducer })

const initialState = {
  game: { name: 'football' },
  person: { name: 'sunny' }
}

const store = createStore(allReducers, initialState);

console.log('---->', store.getState());

// dispatch helps us to update the state.
store.dispatch({ type: 'UPDATE_NAME', payload: 'bitcoins' })
console.log('<-------', store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
