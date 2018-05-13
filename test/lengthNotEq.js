import * as RA from '../src/index';
import eq from './shared/eq';

describe('lengthNotEq', function() {
  it(`should return true if the length of a list is not equal to the supplied length`, function() {
    eq(RA.lengthNotEq(3, [1, 2, 3, 4]), true);
    eq(RA.lengthNotEq(3, [1, 2]), true);
    eq(RA.lengthNotEq(3, [1, 2, 3]), false);
    eq(RA.lengthNotEq(0, []), false);
  });

  it(`should return true if the length of a string is not equal to the supplied length`, function() {
    eq(RA.lengthNotEq(3, 'abcd'), true);
    eq(RA.lengthNotEq(3, 'ab'), true);
    eq(RA.lengthNotEq(3, 'abc'), false);
    eq(RA.lengthNotEq(0, ''), false);
  });

  it(`should return true for values without a length property`, function() {
    eq(RA.lengthNotEq(1, NaN), true);
    eq(RA.lengthNotEq(1, undefined), true);
    eq(RA.lengthNotEq(1, null), true);
    eq(RA.lengthNotEq(1, {}), true);
    eq(RA.lengthNotEq(1, true), true);
    eq(RA.lengthNotEq(1, false), true);
    eq(RA.lengthNotEq(1, 5), true);
  });

  it(`should be curried`, function() {
    eq(RA.lengthNotEq(1, [1, 2]), true);
    eq(RA.lengthNotEq(1)([1, 2]), true);
  });
});
