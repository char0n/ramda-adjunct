import * as RA from '../src/index';
import eq from './shared/eq';

describe('lengthGt', function() {
  context(
    'given the length of a list is greater than the supplied length',
    function() {
      specify('should return true', function() {
        eq(RA.lengthGt(3, [1, 2, 3, 4]), true);
        eq(RA.lengthGt(3, [1, 2, 3]), false);
        eq(RA.lengthGt(0, []), false);
      });
    }
  );

  context(
    'given the length of a string is greater than the supplied length',
    function() {
      specify('should return true', function() {
        eq(RA.lengthGt(3, 'abcd'), true);
        eq(RA.lengthGt(3, 'abc'), false);
        eq(RA.lengthGt(0, ''), false);
      });
    }
  );

  context("given a value doesn't have a length property", function() {
    specify('should return false', function() {
      eq(RA.lengthGt(1, NaN), false);
      eq(RA.lengthGt(1, undefined), false);
      eq(RA.lengthGt(1, null), false);
      eq(RA.lengthGt(1, {}), false);
      eq(RA.lengthGt(1, true), false);
      eq(RA.lengthGt(1, false), false);
      eq(RA.lengthGt(1, 5), false);
    });
  });

  it('should be curried', function() {
    eq(RA.lengthGt(1, [1, 2]), true);
    eq(RA.lengthGt(1)([1, 2]), true);
  });
});
