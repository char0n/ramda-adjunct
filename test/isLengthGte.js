import * as RA from '../src/index';
import eq from './shared/eq';

describe('isLengthGte', function() {
  it(`should return true if the length of a list is greater than or equal to the supplied length`, function() {
    eq(RA.isLengthGte(3, [1, 2, 3, 4]), true);
    eq(RA.isLengthGte(3, [1, 2, 3]), true);
    eq(RA.isLengthGte(3, [1, 2]), false);
    eq(RA.isLengthGte(0, []), true);
  });

  it(`should return true if the length of a string is greater than or equal to the supplied length`, function() {
    eq(RA.isLengthGte(3, 'abcd'), true);
    eq(RA.isLengthGte(3, 'abc'), true);
    eq(RA.isLengthGte(3, 'ab'), false);
    eq(RA.isLengthGte(0, ''), true);
  });

  it(`should return false for values without a length property`, function() {
    eq(RA.isLengthGte(1, NaN), false);
    eq(RA.isLengthGte(1, undefined), false);
    eq(RA.isLengthGte(1, null), false);
    eq(RA.isLengthGte(1, {}), false);
    eq(RA.isLengthGte(1, true), false);
    eq(RA.isLengthGte(1, false), false);
    eq(RA.isLengthGte(1, 5), false);
  });

  it(`should be curried`, function() {
    eq(RA.isLengthGte(1)([1]), true);
  });
});
