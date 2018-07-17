/**
 * App state, actions and reducers
 */

import { createActions, handleAction } from 'redux-actions';


/*
 * STORE
 */

export interface AppStore {
  slider: boolean;
  apps: any[];
  app: any;
  error: string;
}

const initState: AppStore = {
  slider: false,
  apps: [],
  app: null,
  error: ''
};

/*
 * ACTIONS
 */

export const TOGGLE_SLIDER = 'TOGGLE_SLIDER';
export const ADD_APPS = 'ADD_APPS';
export const FETCH_APPS = 'FETCH_APPS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const SWITCH_APP = 'SWITCH_APP';

const actionCreators = createActions({},
  TOGGLE_SLIDER,
  ADD_APPS, FETCH_APPS, FETCH_FAILED,
  SWITCH_APP
);

export const AppActions = actionCreators;

export const {
  toggleSlider,
  addApps, fetchApps, fetchFailed,
  switchApp
} = actionCreators;

/*
 * REDUCERS
 */

const toggleSliderReducer = handleAction(
  TOGGLE_SLIDER,
  (state, action) => action.payload,
  initState.slider
);

const addAppsReducer = handleAction(
  ADD_APPS,
  (state, action) => action.payload,
  initState.apps
);

const switchAppReducer = handleAction(
  SWITCH_APP,
  (state, action) => action.payload,
  initState.app
);

const failedErrorReducer = handleAction(
  FETCH_FAILED,
  (state, action) => action.payload,
  initState.error
);

export function slider(state = initState.slider, action) {
  switch (action.type) {
    case TOGGLE_SLIDER:
      return toggleSliderReducer(state, action);
    default:
      return state;
  }
}

export function apps(state = initState.apps, action) {
  switch (action.type) {
    case ADD_APPS:
      return addAppsReducer(state, action);
    case FETCH_APPS:
      return addAppsReducer(state, action);
    default:
      return state;
  }
}

export function app(state = initState.app, action) {
  switch (action.type) {
    case SWITCH_APP:
      return switchAppReducer(state, action);
    default:
      return state;
  }
}

export function error(state = initState.error, action) {
  switch (action.type) {
    case FETCH_FAILED:
      return failedErrorReducer(state, action);
    default:
      return state;
  }
}

export const AppReducers = {
  slider, apps, app, error
};

