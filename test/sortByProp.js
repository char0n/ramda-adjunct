import * as RA from '../src';

import { assert } from 'chai';

describe.only('sortByProp', function () {
  context('When is an array of tuples', function () {
    it('returns a ordered result', function () {
      const sortByFirstItem = RA.sortByProp(0);
      const list = [
        [-1, 1],
        [-2, 2],
        [-3, 3],
      ];

      assert.deepEqual(sortByFirstItem(list), [
        [-3, 3],
        [-2, 2],
        [-1, 1],
      ]);
    });
  });

  context('When is an array of object', function () {
    it('returns a ordered result', function () {
      const sortByName = RA.sortByProp('name');
      const alice = {
        name: 'ALICE',
        age: 101,
      };
      const bob = {
        name: 'Bob',
        age: -10,
      };
      const clara = {
        name: 'clara',
        age: 314.159,
      };
      const people = [clara, bob, alice];

      assert.deepEqual(sortByName(people), [alice, bob, clara]);
    });
  });
});
