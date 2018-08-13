/**
 * App redux
 */

import { createStore, combineReducers } from 'redux';

const initialState = {
  open: false
};

export const sidenav = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_SIDENAV':
      state = Object.assign(state, { open: true });
      break; 
    case 'CLOSE_SIDENAV':
      state = Object.assign(state, { open: false });
      break;   
    default:
      break;      
  }
  return state;
}

const app = combineReducers({
  sidenav
});

export const appStore = createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
