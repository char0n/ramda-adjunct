import RA from '../src/index';
import eq from './shared/eq';
import chai from 'chai';


describe('omitIndexes', function() {
  let list;

  beforeEach(function() {
    list = ['a', 'b', 'c', 'd'];
  });

  it('tests currying', function() {
    eq(RA.omitIndexes([], []), []);
    eq(RA.omitIndexes([])([]), []);
  });

  it('tests omitting values from list by indexes', function() {
    eq(RA.omitIndexes([0, 2], list), ['b', 'd']);
  });

  context("when indexes doesn't exist", function() {
    specify('should skip these indexes', function() {
      eq(RA.omitIndexes([-1, 0, 2, 5], list), ['b', 'd']);
    });
  });

  context('when indexes is a non-array', function() {
    specify('should produce TypeError', function() {
      chai.assert.throws(RA.omitIndexes.bind(null, undefined, list), TypeError);
    });
  });

  context('when list is a non-array', function() {
    specify('should product TypeError', function() {
      chai.assert.throws(RA.omitIndexes.bind(null, [0, 2], undefined), TypeError);
    });
  });

  context('when empty indexes', function() {
    specify('should return original array', function() {
      eq(RA.omitIndexes([], list), list);
    });
  });

  context('when empty list', function() {
    specify('should return empty array', function() {
      eq(RA.omitIndexes([0, 1, 2], []), []);
    });
  });

  context('when empty indexes and list', function() {
    specify('should return empty array', function() {
      eq(RA.omitIndexes([], []), []);
    });
  });
});
