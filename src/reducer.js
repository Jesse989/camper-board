import {receiveCampers, sortBySelector, INITIAL_STATE} from './core';


export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SORT_CAMPERS':
      return sortBySelector(state);
    case 'RECEIVE_CAMPERS':
      return receiveCampers(action.response);
    default:
      return state;
  }
}
