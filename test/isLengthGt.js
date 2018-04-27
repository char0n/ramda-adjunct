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

  it(`should be curried`, function() {
    eq(RA.isLengthGt(1)([1, 2]), true);
  });
});
