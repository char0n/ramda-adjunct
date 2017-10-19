import RA from '../src/index';
import eq from './shared/eq';

describe('isNotPair', function() {
  it('returns true for empty array', function() {
    eq(RA.isNotPair([]), true);
  });

  it('returns true for non-empty array with less than two items', function() {
    eq(RA.isNotPair([0]), true);
  });

  it('returns false for array with exactly two items', function() {
    eq(RA.isNotPair([0, 1]), false);
  });

  it('returns true for array with greater than two items', function() {
    eq(RA.isNotPair([0, 1, 2]), true);
  });

  it('returns true for all other types', function() {
    eq(RA.isNotPair(0), true);
    eq(RA.isNotPair(''), true);
    eq(RA.isNotPair('foo'), true);
    eq(RA.isNotPair(false), true);
    eq(RA.isNotPair(true), true);
    eq(RA.isNotPair(new Date()), true);
    eq(RA.isNotPair({ 0: 0, 1: 1 }), true);
    eq(RA.isNotPair({ foo: 0, bar: 1 }), true);
  });
});
