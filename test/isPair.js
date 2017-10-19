import RA from '../src/index';
import eq from './shared/eq';

describe('isPair', function() {
  it('returns false for empty array', function() {
    eq(RA.isPair([]), false);
  });

  it('returns false for non-empty array with less than two items', function() {
    eq(RA.isPair([0]), false);
  });

  it('returns true for array with exactly two items', function() {
    eq(RA.isPair([0, 1]), true);
  });

  it('returns false for array with greater than two items', function() {
    eq(RA.isPair([0, 1, 2]), false);
  });

  it('returns false for all other types', function() {
    eq(RA.isPair(0), false);
    eq(RA.isPair(''), false);
    eq(RA.isPair('foo'), false);
    eq(RA.isPair(false), false);
    eq(RA.isPair(true), false);
    eq(RA.isPair(new Date()), false);
    eq(RA.isPair({ 0: 0, 1: 1 }), false);
    eq(RA.isPair({ foo: 0, bar: 1 }), false);
  });
});
