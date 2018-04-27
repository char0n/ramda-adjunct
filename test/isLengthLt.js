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

  it(`should be curried`, function() {
    eq(RA.isLengthLt(2)([1]), true);
  });
});
