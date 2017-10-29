import chai from 'chai';

import RA from '../src/index';
import eq from './shared/eq';


describe('pickIndexes', function() {
  let list;

  beforeEach(function() {
    list = ['a', 'b', 'c'];
  });

  it('tests picking values from list by indexes', function() {
    eq(RA.pickIndexes([0, 2], list), ['a', 'c']);
  });

  it('tests currying', function() {
    eq(RA.pickIndexes([], []), []);
    eq(RA.pickIndexes([])([]), []);
  });


  context("when indexes doesn't exist", function() {
    specify('should skip these indexes', function() {
      eq(RA.pickIndexes([-1, 0, 5], list), ['a']);
    });
  });

  // todo fix function parens inconsistencies
  context('when indexes is a non-array', function() {
    it('should produce TypeError', function() {
      chai.assert.throws(RA.pickIndexes.bind(null, undefined, list), TypeError);
    });
  });


  context('when list is a non-array', function() {
    it('should product TypeError', function() {
      chai.assert.throws(RA.pickIndexes.bind(null, [0, 2], undefined), TypeError);
    });
  });
});
