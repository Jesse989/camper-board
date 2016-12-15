import {Map} from 'immutable';

export const INITIAL_STATE = Map({
  campers: [],
  order: 'recent'
});

export function receiveCampers(response) {
  return Map({
    campers: response,
    order: 'recent'
  });
}

function sortFunction(campers, selector) {
  return campers.sort((a, b) => {
    if (a[selector] < b[selector]) {
      return 1;
    }
    if (a[selector] > b[selector]) {
      return -1;
    }
    return 0;
  });
}

function reverseOrder(state) {
  switch (state.get('order')) {
    case 'recent':
      return 'alltime';
    case 'alltime':
      return 'recent';
    default:
      return 'alltime';
  }
}

export function sortBySelector(state) {
  return Map({
    campers: sortFunction(state.get('campers'), reverseOrder(state)),
    order: reverseOrder(state)
  })
}
