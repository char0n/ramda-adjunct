import * as RA from '../src';
import eq from './shared/eq';

describe('lengthEq', function() {
  context(
    'given the length of a list is equal to the supplied length',
    function() {
      specify('should return true', function() {
        eq(RA.lengthEq(3, [1, 2, 3]), true);
        eq(RA.lengthEq(3, [1, 2, 3, 4]), false);
        eq(RA.lengthEq(3, [1, 2]), false);
        eq(RA.lengthEq(0, []), true);
      });
    }
  );

  context(
    'given the length of a string is equal to the supplied length',
    function() {
      specify('should return true', function() {
        eq(RA.lengthEq(3, 'abc'), true);
        eq(RA.lengthEq(3, 'abcd'), false);
        eq(RA.lengthEq(3, 'ab'), false);
        eq(RA.lengthEq(0, ''), true);
      });
    }
  );

  context("given a value doesn't have a length property", function() {
    specify('should return true', function() {
      eq(RA.lengthEq(1, NaN), false);
      eq(RA.lengthEq(1, undefined), false);
      eq(RA.lengthEq(1, null), false);
      eq(RA.lengthEq(1, {}), false);
      eq(RA.lengthEq(1, true), false);
      eq(RA.lengthEq(1, false), false);
      eq(RA.lengthEq(1, 5), false);
    });
  });

  it('should be curried', function() {
    eq(RA.lengthEq(2, [1, 2]), true);
    eq(RA.lengthEq(2)([1, 2]), true);
  });
});
