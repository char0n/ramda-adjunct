import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import eq from './shared/eq';
import Symbol from './shared/Symbol';

describe('floor', function() {
  it('should floor float to nearest integer', function() {
    eq(RA.floor(0.9), 0);
    eq(RA.floor(5.95), 5);
    eq(RA.floor(5.5), 5);
    eq(RA.floor(5.05), 5);
    eq(RA.floor(-5.05), -6);
    eq(RA.floor(-5.5), -6);
    eq(RA.floor(-5.95), -6);
  });

  context('given integer number', function() {
    specify('should return original integer number', function() {
      eq(RA.floor(0), 0);
      eq(RA.floor(1), 1);
      eq(RA.floor(-1), -1);
    });
  });

  context('given value that is not a number', function() {
    specify('should return NaN', function() {
      eq(RA.floor(undefined), NaN);
      eq(RA.floor(NaN), NaN);
      eq(RA.floor({}), NaN);
      eq(RA.floor(/a/), NaN);
      eq(RA.floor('test'), NaN);
      eq(RA.floor(new Error()), NaN);
    });
  });

  context('given null', function() {
    specify('should return 0', function() {
      eq(RA.floor(null), 0);
    });
  });

  context('given Symbol value', function() {
    specify('should throw TypeError', function() {
      let shouldThrow;
      try {
        Math.floor(Symbol(''));
        shouldThrow = false;
      } catch (e) {
        shouldThrow = true;
      }

      if (shouldThrow) {
        assert.throw(() => RA.floor(Symbol('')));
      }
    });
  });

  context('given valid date object', function() {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function() {
        eq(RA.floor(new Date(2)), 2);
      }
    );
  });

  context('given Infinity value', function() {
    specify('should return untouched Infinity value', function() {
      eq(RA.floor(Infinity), Infinity);
      eq(RA.floor(-Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const floor = RA.floor(R.__);

    eq(floor(0.9), 0);
  });
});
