import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('sortByProp', function () {
  const alice = {
    name: 'ALICE',
    age: 101,
    lastName: 'Smith',
  };
  const bob = {
    name: 'Bob',
    age: -10,
    lastName: 'Smith',
  };
  const clara = {
    name: 'clara',
    age: 314.159,
    lastName: 'Kris',
  };
  const people = [clara, bob, alice];

  context('given list of objects', function () {
    specify('should sort by existing property', function () {
      assert.deepEqual(RA.sortByProp('name', people), [alice, bob, clara]);
    });

    context('given property to sort by does not exist', function () {
      specify('should return original list', function () {
        assert.deepEqual(RA.sortByProp('p', people), people);
      });
    });
  });

  context('given list of strings', function () {
    specify('should return unmodified list of strings', function () {
      assert.deepEqual(RA.sortByProp('name', ['a', 'b', 'c']), ['a', 'b', 'c']);
    });
  });

  context('given list of tuples', function () {
    specify('should sort by tuple value', function () {
      assert.deepEqual(
        RA.sortByProp(0, [
          [-1, 1],
          [-2, 2],
          [-3, 3],
        ]),
        [
          [-3, 3],
          [-2, 2],
          [-1, 1],
        ]
      );
    });
  });

  context('given empty list', function () {
    specify('should return empty list', function () {
      assert.deepEqual(RA.sortByProp('name', []), []);
    });
  });

  it('should be curried', function () {
    assert.deepEqual(
      RA.sortByProp('name')(people),
      RA.sortByProp('name', people)
    );
  });
});
