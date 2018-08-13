/**
 * Sidenav redux
 */

const initialState = {
  open: false
};
  
export const isOpen = state => state.open;
  
const sidenav = (state = initialState, action) => {
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

export default sidenav;
  
  // import Immutable from 'immutable';
  // import * as actionTypes from '../actions/actionTypes';
  
  // const initialSettingsState = Immutable.fromJS({
  //     isOpen: false,
  //     content: null,
  //     width: 1000,
  // });
  
  // export const isFlyoutOpen = state => state.getIn(['flyout', 'isOpen']);
  
  // const flyout = (state = initialSettingsState, action) => {
  //     switch (action.type) {
  //         case actionTypes.OPEN_FLYOUT:
  //             state = state.set('isOpen', true);
  //             state = state.set('content', action.content);
  //             state = state.set('width', action.width);
  //             break;
  
  //         case actionTypes.CLOSE_FLYOUT:
  //             state = state.set('isOpen', false);
  //             state = state.set('content', null);
  //             break;
  //     }
  
  //     return state;
  // };
  
  // export default flyout;
  