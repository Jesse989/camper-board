import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import fakeData from './fakeData';

import reducer from './reducer';

describe('reducer', () => {

  it('handles SORT_CAMPERS', () => {
    const initialState = Map({
      campers: fakeData,
      order: 'alltime'
    });
    const action = {type: 'SORT_CAMPERS'};
    const nextState = reducer(initialState, action);

    expect(nextState.get('order')).to.equal('recent');

    const finalState = reducer(nextState, action);

    expect(finalState.get('order')).to.equal('alltime');
  })

  it('has an initial state', () => {
    const action = {type: 'SORT_CAMPERS'};
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(Map({
      campers: fakeData,
      order: 'alltime'
    }));
  })

  it('can be used with reduce', () => {
    const actions = [
      {type: 'GET_CAMPERS'},
      {type: 'SORT_CAMPERS'},
      {type: 'SORT_CAMPERS'},
      {type: 'SORT_CAMPERS'}
    ];
    const finalState = actions.reduce(reducer, Map());

    expect(finalState.get('order')).to.equal('recent');
  })
})
