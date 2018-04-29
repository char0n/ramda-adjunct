import * as RA from '../src/index';
import eq from './shared/eq';

describe('lengthLte', function() {
  it(`should return true if the length of a list is less than or equal to the supplied length`, function() {
    eq(RA.lengthLte(3, [1, 2]), true);
    eq(RA.lengthLte(3, [1, 2, 3]), true);
    eq(RA.lengthLte(3, [1, 2, 3, 4]), false);
    eq(RA.lengthLte(0, []), true);
  });

  it(`should return true if the length of a string is less than or equal to the supplied length`, function() {
    eq(RA.lengthLte(3, 'ab'), true);
    eq(RA.lengthLte(3, 'abc'), true);
    eq(RA.lengthLte(3, 'abcd'), false);
    eq(RA.lengthLte(0, ''), true);
  });

  it(`should return false for values without a length property`, function() {
    eq(RA.lengthLte(1, NaN), false);
    eq(RA.lengthLte(1, undefined), false);
    eq(RA.lengthLte(1, null), false);
    eq(RA.lengthLte(1, {}), false);
    eq(RA.lengthLte(1, true), false);
    eq(RA.lengthLte(1, false), false);
    eq(RA.lengthLte(1, 5), false);
  });

  it(`should be curried`, function() {
    eq(RA.lengthLte(1)([1]), true);
  });
});
