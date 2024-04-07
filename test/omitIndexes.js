import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('omitIndexes', function () {
  let list;

  beforeEach(function () {
    list = ['a', 'b', 'c', 'd'];
  });

  it('should omit values from list by indexes', function () {
    assert.sameOrderedMembers(RA.omitIndexes([0, 2], list), ['b', 'd']);
  });

  context("given indexes doesn't exist", function () {
    specify('should skip these indexes', function () {
      assert.sameOrderedMembers(RA.omitIndexes([-1, 0, 2, 5], list), [
        'b',
        'd',
      ]);
    });
  });

  context('given indexes is a non-array', function () {
    specify('should produce TypeError', function () {
      assert.throws(RA.omitIndexes.bind(null, undefined, list), TypeError);
    });
  });

  context('given list is a non-array', function () {
    specify('should product TypeError', function () {
      assert.throws(RA.omitIndexes.bind(null, [0, 2], undefined), TypeError);
    });
  });

  context('given empty indexes', function () {
    specify('should return original array', function () {
      assert.sameOrderedMembers(RA.omitIndexes([], list), list);
    });
  });

  context('given empty list', function () {
    specify('should return empty array', function () {
      assert.sameOrderedMembers(RA.omitIndexes([0, 1, 2], []), []);
    });
  });

  context('given empty indexes and list', function () {
    specify('should return empty array', function () {
      assert.sameOrderedMembers(RA.omitIndexes([], []), []);
    });
  });

  it('should be curried', function () {
    assert.sameOrderedMembers(RA.omitIndexes([], []), []);
    assert.sameOrderedMembers(RA.omitIndexes([])([]), []);
  });
});
