import * as RA from '../src/index';
import eq from './shared/eq';

describe('lengthGt', function() {
  it(`should return true if the length of a list is greater than supplied length`, function() {
    eq(RA.lengthGt(3, [1, 2, 3, 4]), true);
    eq(RA.lengthGt(3, [1, 2, 3]), false);
    eq(RA.lengthGt(0, []), false);
  });

  it(`should return true if the length of a string is greater than supplied length`, function() {
    eq(RA.lengthGt(3, 'abcd'), true);
    eq(RA.lengthGt(3, 'abc'), false);
    eq(RA.lengthGt(0, ''), false);
  });

  it(`should return false for values without a length property`, function() {
    eq(RA.lengthGt(1, NaN), false);
    eq(RA.lengthGt(1, undefined), false);
    eq(RA.lengthGt(1, null), false);
    eq(RA.lengthGt(1, {}), false);
    eq(RA.lengthGt(1, true), false);
    eq(RA.lengthGt(1, false), false);
    eq(RA.lengthGt(1, 5), false);
  });

  it(`should be curried`, function() {
    eq(RA.lengthGt(1)([1, 2]), true);
  });
});
