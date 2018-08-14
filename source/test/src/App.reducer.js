/**
 * App redux
 */

import { combineReducers } from 'redux';

export const open = (state = true, action) => {
  switch (action.type) {
    case 'OPEN_SIDENAV':
      return true;
    case 'CLOSE_SIDENAV':
      return false;
    case 'TOGGLE_SIDENAV':
      return !state;
    default:
      return state;
  }
}

const appsInitial = [
  { title: 'Localhost', icon: 'globe', url: 'https://localhost:8001/' }
];

export const apps = (state = appsInitial, action) => {
  switch (action.type) {
    case 'ADD_APPS':
      return action.payload;
    default: 
      return state;
  }
}

export const app = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_APP':
      return action.payload;
    default: 
      return state;
  }
}

export const appReducers = combineReducers({
  open,
  apps,
  app
});