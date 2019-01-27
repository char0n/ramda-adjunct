import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import eq from './shared/eq';
import Symbol from './shared/Symbol';

describe('round', function() {
  it('should round float to nearest integer', function() {
    eq(RA.round(0.9), 1);
    eq(RA.round(5.95), 6);
    eq(RA.round(5.5), 6);
    eq(RA.round(5.05), 5);
    eq(RA.round(-5.05), -5);
    eq(RA.round(-5.5), -5);
    eq(RA.round(-5.95), -6);
  });

  context('given integer number', function() {
    specify('should return original integer number', function() {
      eq(RA.round(0), 0);
      eq(RA.round(1), 1);
      eq(RA.round(-1), -1);
    });
  });

  context('given value that is not a number', function() {
    specify('should return NaN', function() {
      eq(RA.round(undefined), NaN);
      eq(RA.round(NaN), NaN);
      eq(RA.round({}), NaN);
      eq(RA.round(/a/), NaN);
      eq(RA.round('test'), NaN);
      eq(RA.round(new Error()), NaN);
    });
  });

  context('given null', function() {
    specify('should return 0', function() {
      eq(RA.round(null), 0);
    });
  });

  context('given Symbol value', function() {
    specify('should throw TypeError', function() {
      let shouldThrow;
      try {
        Math.round(Symbol(''));
        shouldThrow = false;
      } catch (e) {
        shouldThrow = true;
      }

      if (shouldThrow) {
        assert.throw(() => RA.round(Symbol('')));
      }
    });
  });

  context('given valid date object', function() {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function() {
        eq(RA.round(new Date(2)), 2);
      }
    );
  });

  context('given Infinity value', function() {
    specify('should return untouched Infinity value', function() {
      eq(RA.round(Infinity), Infinity);
      eq(RA.round(-Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const round = RA.round(R.__);

    eq(round(0.9), 1);
  });
});
