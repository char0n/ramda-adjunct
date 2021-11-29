import * as RA from '../src';

import { assert } from 'chai';

describe.only('sortByPath', function () {
  context('when has a list of tuples', function () {
    it('returns the list sorted', function () {
      const sortByFirstItem = RA.sortByPath([[0]]);
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
  });

  context('when has a list of object', function () {
    it('returns the list sorted', function () {
      const sortByAddress = RA.sortByPath([['address', 'street']]);
      const alice = {
        name: 'ALICE',
        age: 101,
        address: {
          street: 'Czech street',
          street: 31,
        },
      };
      const bob = {
        name: 'Bob',
        age: -10,
        address: {
          street: 'Slovak street',
          street: 32,
        },
      };
      const clara = {
        name: 'clara',
        age: 314.159,
        address: {
          street: 'Polish street',
          street: 33,
        },
      };
      const people = [clara, bob, alice];

      assert.deepEqual(sortByAddress(people), [alice, bob, clara]);
    });

    context('and passing multiples sorts', function () {
      it('returns the list sorted', function () {
        const sortByAddress = RA.sortByPath([['address', 'street'], ['age']]);
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
  });
});
