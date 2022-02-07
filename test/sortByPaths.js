import * as RA from '../src';

import { assert } from 'chai';

describe.only('sortByPaths', function () {
  context('when has a list of tuples', function () {
    it('returns the list sorted', function () {
      const sortByFirstItem = RA.sortByPaths([[0]]);
      const pairs = [
        [-1, 1],
        [-2, 2],
        [-3, 3],
      ];

      assert.deepEqual(sortByFirstItem(pairs), [
        [-3, 3],
        [-2, 2],
        [-1, 1],
      ]);
    });

    context('and sorting with an empty list', function () {
      it('returns the original list', function () {
        const sortByFirstItem = RA.sortByPaths([]);
        const pairs = [
          [-1, 1],
          [-2, 2],
          [-3, 3],
        ];

        assert.deepEqual(sortByFirstItem(pairs), [
          [-1, 1],
          [-2, 2],
          [-3, 3],
        ]);
      });
    });
  });

  context('when has a list of object', function () {
    it('returns the list sorted', function () {
      const sortByAddress = RA.sortByPaths([['address', 'streetNumber']]);
      const alice = {
        name: 'ALICE',
        age: 101,
        address: {
          street: 'Czech street',
          streetNumber: 31,
        },
      };
      const bob = {
        name: 'Bob',
        age: -10,
        address: {
          street: 'Slovak street',
          streetNumber: 32,
        },
      };
      const clara = {
        name: 'clara',
        age: 314.159,
        address: {
          street: 'Polish street',
          streetNumber: 33,
        },
      };
      const people = [clara, bob, alice];

      assert.deepEqual(sortByAddress(people), [alice, bob, clara]);
    });

    context('and passing multiples sorts', function () {
      it('returns the list sorted', function () {
        const sortByAddress = RA.sortByPaths([['address', 'street'], ['age']]);
        const alice = {
          name: 'Alice',
          age: 60,
          address: {
            street: 31,
          },
        };
        const bob = {
          name: 'Bob',
          age: 22,
          address: {
            street: 31,
          },
        };
        const clara = {
          name: 'Clara',
          age: 18,
          address: {
            street: 32,
          },
        };
        const people = [clara, bob, alice];

        assert.deepEqual(sortByAddress(people), [bob, alice, clara]);
      });
    });

    context('and sorting with an empty list', function () {
      it('returns the list sorted', function () {
        const sortByAddress = RA.sortByPaths([]);
        const alice = {
          name: 'Alice',
          age: 60,
          address: {
            street: 31,
          },
        };
        const bob = {
          name: 'Bob',
          age: 22,
          address: {
            street: 31,
          },
        };
        const clara = {
          name: 'Clara',
          age: 18,
          address: {
            street: 32,
          },
        };
        const people = [clara, bob, alice];

        assert.deepEqual(sortByAddress(people), [clara, bob, alice]);
      });
    });
  });
});
