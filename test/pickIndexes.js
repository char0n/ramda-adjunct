import { assert } from 'chai';

import * as RA from '../src/index';
import eq from './shared/eq';

describe('pickIndexes', function() {
  let list;

  beforeEach(function() {
    list = ['a', 'b', 'c'];
  });

  it('tests currying', function() {
    eq(RA.pickIndexes([], []), []);
    eq(RA.pickIndexes([])([]), []);
  });

  it('tests picking values from list by indexes', function() {
    eq(RA.pickIndexes([0, 2], list), ['a', 'c']);
  });

  context("given indexes doesn't exist", function() {
    specify('should skip these indexes', function() {
      eq(RA.pickIndexes([-1, 0, 5], list), ['a']);
    });
  });

  context('given indexes is a non-array', function() {
    specify('should produce TypeError', function() {
      assert.throws(RA.pickIndexes.bind(null, undefined, list), TypeError);
    });
  });

  context('given list is a non-array', function() {
    specify('should product TypeError', function() {
      assert.throws(RA.pickIndexes.bind(null, [0, 2], undefined), TypeError);
    });
  });

  context('given empty indexes', function() {
    specify('should return empty array', function() {
      eq(RA.pickIndexes([], list), []);
    });
  });

  context('given empty list', function() {
    specify('should return empty array', function() {
      eq(RA.pickIndexes([0, 1, 2], []), []);
    });
  });

  context('given empty indexes and list', function() {
    specify('should return empty array', function() {
      eq(RA.pickIndexes([], []), []);
    });
  });
});
