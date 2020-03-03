import { assert } from 'chai';

import * as RA from '../src';

describe('sortByProps', function() {
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

  context('given an array of objects', function() {
    specify('should curry', function() {
      assert.deepEqual(
        RA.sortByProps(['name'])(people),
        RA.sortByProps(['name'], people)
      );
    });

    specify(
      'should sort by property if property to sort by exists',
      function() {
        assert.deepEqual(RA.sortByProps(['name'])(people), [alice, bob, clara]);
      }
    );

    specify(
      'should return original list if property to sort by does not exist',
      function() {
        assert.deepEqual(RA.sortByProps(['p'])(people), people);
      }
    );

    specify('should sort by multiple properties', function() {
      assert.deepEqual(RA.sortByProps(['lastName', 'name'])(people), [
        clara,
        alice,
        bob,
      ]);
    });

    specify('should ignore properties that do not exist', function() {
      assert.deepEqual(RA.sortByProps(['lastName', 'p', 'name'])(people), [
        clara,
        alice,
        bob,
      ]);
    });
  });

  context('not given an array of objects', function() {
    specify('', function() {
      assert.deepEqual(RA.sortByProps(['name'])(['a', 'b', 'c']), [
        'a',
        'b',
        'c',
      ]);
    });

    specify('should return error', function() {
      assert.deepEqual(RA.sortByProps(['name'])(true), []);
    });
  });
});
