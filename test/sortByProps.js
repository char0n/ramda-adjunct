import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('sortByProps', function () {
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
      assert.deepEqual(RA.sortByProps(['name'], people), [alice, bob, clara]);
    });

    context('given property to sort by does not exist', function () {
      specify('should return original list', function () {
        assert.deepEqual(RA.sortByProps(['p'], people), people);
      });
    });

    specify('should sort by multiple properties', function () {
      assert.deepEqual(RA.sortByProps(['lastName', 'name'], people), [
        clara,
        alice,
        bob,
      ]);
    });

    specify('should ignore properties that do not exist', function () {
      assert.deepEqual(RA.sortByProps(['lastName', 'p', 'name'], people), [
        clara,
        alice,
        bob,
      ]);
    });
  });

  context('given list of strings', function () {
    specify('should return unmodified list of strings', function () {
      assert.deepEqual(RA.sortByProps(['name'], ['a', 'b', 'c']), [
        'a',
        'b',
        'c',
      ]);
    });
  });

  context('given empty list', function () {
    specify('should return empty list', function () {
      assert.deepEqual(RA.sortByProps(['name'], []), []);
    });
  });

  it('should be curried', function () {
    assert.deepEqual(
      RA.sortByProps(['name'])(people),
      RA.sortByProps(['name'], people)
    );
  });
});
