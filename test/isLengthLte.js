import * as RA from '../src/index';
import eq from './shared/eq';

describe('isLengthLte', function() {
  it(`should return true if the length of a list is less than or equal to the supplied length`, function() {
    eq(RA.isLengthLte(3, [1, 2]), true);
    eq(RA.isLengthLte(3, [1, 2, 3]), true);
    eq(RA.isLengthLte(3, [1, 2, 3, 4]), false);
    eq(RA.isLengthLte(0, []), true);
  });

  it(`should return true if the length of a string is less than or equal to the supplied length`, function() {
    eq(RA.isLengthLte(3, 'ab'), true);
    eq(RA.isLengthLte(3, 'abc'), true);
    eq(RA.isLengthLte(3, 'abcd'), false);
    eq(RA.isLengthLte(0, ''), true);
  });

  it(`should be curried`, function() {
    eq(RA.isLengthLte(1)([1]), true);
  });
});
