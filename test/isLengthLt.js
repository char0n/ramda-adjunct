import * as RA from '../src/index';
import eq from './shared/eq';

describe('isLengthLt', function() {
  it(`should return true if the length of a list is less than supplied length`, function() {
    eq(RA.isLengthLt(3, [1, 2]), true);
    eq(RA.isLengthLt(3, [1, 2, 3]), false);
    eq(RA.isLengthLt(0, []), false);
  });

  it(`should return true if the length of a string is less than supplied length`, function() {
    eq(RA.isLengthLt(3, 'ab'), true);
    eq(RA.isLengthLt(3, 'abc'), false);
    eq(RA.isLengthLt(0, ''), false);
  });

  it(`should return false for values without a length property`, function() {
    eq(RA.isLengthLt(1, NaN), false);
    eq(RA.isLengthLt(1, undefined), false);
    eq(RA.isLengthLt(1, null), false);
    eq(RA.isLengthLt(1, {}), false);
    eq(RA.isLengthLt(1, true), false);
    eq(RA.isLengthLt(1, false), false);
    eq(RA.isLengthLt(1, 5), false);
  });

  it(`should be curried`, function() {
    eq(RA.isLengthLt(2)([1]), true);
  });
});
