import * as RA from '../src';
import eq from './shared/eq';

describe('lengthLt', function() {
  context(
    'given the length of a list is less than the supplied length',
    function() {
      specify('should return true', function() {
        eq(RA.lengthLt(3, [1, 2]), true);
        eq(RA.lengthLt(3, [1, 2, 3]), false);
        eq(RA.lengthLt(0, []), false);
      });
    }
  );

  context(
    'given the length of a string is less than the supplied length',
    function() {
      specify('should return true', function() {
        eq(RA.lengthLt(3, 'ab'), true);
        eq(RA.lengthLt(3, 'abc'), false);
        eq(RA.lengthLt(0, ''), false);
      });
    }
  );

  context("given a value doesn't have a length property", function() {
    specify('should return false', function() {
      eq(RA.lengthLt(1, NaN), false);
      eq(RA.lengthLt(1, undefined), false);
      eq(RA.lengthLt(1, null), false);
      eq(RA.lengthLt(1, {}), false);
      eq(RA.lengthLt(1, true), false);
      eq(RA.lengthLt(1, false), false);
      eq(RA.lengthLt(1, 5), false);
    });
  });

  it('should be curried', function() {
    eq(RA.lengthLt(2, [1]), true);
    eq(RA.lengthLt(2)([1]), true);
  });
});
