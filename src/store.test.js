import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import fakeData from './fakeData'

import makeStore from './store';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();

    expect(store.getState()).to.equal(Map({
      campers: fakeData,
      order: 'recent'
    }));
    store.dispatch({type: 'GET_CAMPERS'});

    expect(store.getState()).to.equal(Map({
      campers: fakeData,
      order: 'alltime'
    }));

    store.dispatch({type: 'SORT_CAMPERS'});

    expect(store.getState()).to.equal(Map({
      campers: fakeData,
      order: 'recent'
    }));

    store.dispatch({type: 'SORT_CAMPERS'});

    expect(store.getState()).to.equal(Map({
      campers: fakeData,
      order: 'alltime'
    }));
  })
})
