import * as RA from '../src';
import eq from './shared/eq';

describe('lengthGte', function() {
  context(
    'given the length of a list is greater than or equal to the supplied length',
    function() {
      specify('should return true', function() {
        eq(RA.lengthGte(3, [1, 2, 3, 4]), true);
        eq(RA.lengthGte(3, [1, 2, 3]), true);
        eq(RA.lengthGte(3, [1, 2]), false);
        eq(RA.lengthGte(0, []), true);
      });
    }
  );

  context(
    'given the length of a string is greater than or equal to the supplied length',
    function() {
      specify('should return true', function() {
        eq(RA.lengthGte(3, 'abcd'), true);
        eq(RA.lengthGte(3, 'abc'), true);
        eq(RA.lengthGte(3, 'ab'), false);
        eq(RA.lengthGte(0, ''), true);
      });
    }
  );

  context("given a value doesn't have a length property", function() {
    specify('should return false', function() {
      eq(RA.lengthGte(1, NaN), false);
      eq(RA.lengthGte(1, undefined), false);
      eq(RA.lengthGte(1, null), false);
      eq(RA.lengthGte(1, {}), false);
      eq(RA.lengthGte(1, true), false);
      eq(RA.lengthGte(1, false), false);
      eq(RA.lengthGte(1, 5), false);
    });
  });

  it('should be curried', function() {
    eq(RA.lengthGte(1, [1]), true);
    eq(RA.lengthGte(1)([1]), true);
  });
});
