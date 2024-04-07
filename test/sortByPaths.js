import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('sortByPaths', function () {
  const alice = {
    name: 'Alice',
    address: {
      street: 31,
      zipCode: 97777,
    },
  };
  const bob = {
    name: 'Bob',
    address: {
      street: 31,
      zipCode: 55555,
    },
  };
  const clara = {
    name: 'Clara',
    address: {
      street: 32,
      zipCode: 90210,
    },
  };
  const people = [clara, bob, alice];

  context('given list of objects', function () {
    specify('should sort by existing paths', function () {
      assert.deepEqual(RA.sortByPaths([['name']], people), [alice, bob, clara]);
    });

    context('given path to sort by does not exist', function () {
      specify('should return original list', function () {
        assert.deepEqual(RA.sortByPaths([['p']], people), people);
      });
    });

    specify('should sort by multiple paths', function () {
      assert.deepEqual(
        RA.sortByPaths(
          [
            ['address', 'street'],
            ['address', 'zipCode'],
          ],
          people
        ),
        [bob, alice, clara]
      );

      assert.deepEqual(
        RA.sortByPaths(
          [
            ['address', 'zipCode'],
            ['address', 'street'],
          ],
          people
        ),
        [bob, clara, alice]
      );
    });

    specify('should ignore paths that do not exist', function () {
      assert.deepEqual(
        RA.sortByPaths(
          [['lastName'], ['p'], ['address', 'street'], ['address', 'zipCode']],
          people
        ),
        [bob, alice, clara]
      );
    });
  });

  context('given list of strings', function () {
    specify('should return unmodified list of strings', function () {
      assert.deepEqual(RA.sortByPaths([['name']], ['a', 'b', 'c']), [
        'a',
        'b',
        'c',
      ]);
    });
  });

  context('given empty list', function () {
    specify('should return empty list', function () {
      assert.deepEqual(RA.sortByPaths([['name']], []), []);
    });
  });

  it('should be curried', function () {
    assert.deepEqual(
      RA.sortByPaths([['name']])(people),
      RA.sortByPaths([['name']], people)
    );
  });
});
