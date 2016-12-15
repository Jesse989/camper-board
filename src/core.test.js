import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import fakeData from './fakeData';

import {sortBySelector} from './core';


  describe('sortBySelector()', () => {

    it('sorts the results by number of brownie points this month', () => {
      const state = Map({
        campers: fakeData,
        order: 'alltime'
      });
      const nextState = sortBySelector(state);
      expect(nextState.get('campers')[0].username).to.equal('sjames1958gm');
      expect(nextState.get('campers')[1].username).to.equal('diomed');
      expect(nextState).to.equal(Map({
        campers: fakeData,
        order: 'recent'
      }))
    });

    it('sorts the results by number of brownie points from alltime', () => {
      const state = Map({
        campers: fakeData,
        order: 'recent'
      });
      const nextState = sortBySelector(state);
      expect(nextState.get('campers')[0].username).to.equal('sjames1958gm');
      expect(nextState.get('campers')[1].username).to.equal('Takumar');
      expect(nextState).to.equal(Map({
        campers: fakeData,
        order: 'alltime'
      }))
    });
  });
});
