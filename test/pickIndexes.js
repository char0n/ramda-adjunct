import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('pickIndexes', function () {
  let list;

  beforeEach(function () {
    list = ['a', 'b', 'c'];
  });

  it('should support picking values from list by indexes', function () {
    assert.sameOrderedMembers(RA.pickIndexes([0, 2], list), ['a', 'c']);
  });

  context("given indexes doesn't exist", function () {
    specify('should skip these indexes', function () {
      assert.sameOrderedMembers(RA.pickIndexes([-1, 0, 5], list), ['a']);
    });
  });

  context('given indexes is a non-array', function () {
    specify('should produce TypeError', function () {
      assert.throws(RA.pickIndexes.bind(null, undefined, list), TypeError);
    });
  });

  context('given list is a non-array', function () {
    specify('should product TypeError', function () {
      assert.throws(RA.pickIndexes.bind(null, [0, 2], undefined), TypeError);
    });
  });

  context('given empty indexes', function () {
    specify('should return empty array', function () {
      assert.sameOrderedMembers(RA.pickIndexes([], list), []);
    });
  });

  context('given empty list', function () {
    specify('should return empty array', function () {
      assert.sameOrderedMembers(RA.pickIndexes([0, 1, 2], []), []);
    });
  });

  context('given empty indexes and list', function () {
    specify('should return empty array', function () {
      assert.sameOrderedMembers(RA.pickIndexes([], []), []);
    });
  });

  it('should be curried', function () {
    assert.sameOrderedMembers(RA.pickIndexes([], []), []);
    assert.sameOrderedMembers(RA.pickIndexes([])([]), []);
  });
});
