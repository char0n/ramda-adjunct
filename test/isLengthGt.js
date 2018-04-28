import * as RA from '../src/index';
import eq from './shared/eq';

describe('isLengthGt', function() {
  it(`should return true if the length of a list is greater than supplied length`, function() {
    eq(RA.isLengthGt(3, [1, 2, 3, 4]), true);
    eq(RA.isLengthGt(3, [1, 2, 3]), false);
    eq(RA.isLengthGt(0, []), false);
  });

  it(`should return true if the length of a string is greater than supplied length`, function() {
    eq(RA.isLengthGt(3, 'abcd'), true);
    eq(RA.isLengthGt(3, 'abc'), false);
    eq(RA.isLengthGt(0, ''), false);
  });

  it(`should return false for values without a length property`, function() {
    eq(RA.isLengthGt(1, NaN), false);
    eq(RA.isLengthGt(1, undefined), false);
    eq(RA.isLengthGt(1, null), false);
    eq(RA.isLengthGt(1, {}), false);
    eq(RA.isLengthGt(1, true), false);
    eq(RA.isLengthGt(1, false), false);
    eq(RA.isLengthGt(1, 5), false);
  });

  it(`should be curried`, function() {
    eq(RA.isLengthGt(1)([1, 2]), true);
  });
});
