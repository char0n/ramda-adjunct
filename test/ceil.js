import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import eq from './shared/eq';
import Symbol from './shared/Symbol';

describe('ceil', function() {
  it('should ceil float to nearest integer', function() {
    eq(RA.ceil(0.9), 1);
    eq(RA.ceil(5.95), 6);
    eq(RA.ceil(5.5), 6);
    eq(RA.ceil(5.05), 6);
    eq(RA.ceil(-5.05), -5);
    eq(RA.ceil(-5.5), -5);
    eq(RA.ceil(-5.95), -5);
  });

  context('given integer number', function() {
    specify('should return original integer number', function() {
      eq(RA.ceil(0), 0);
      eq(RA.ceil(1), 1);
      eq(RA.ceil(-1), -1);
    });
  });

  context('given value that is not a number', function() {
    specify('should return NaN', function() {
      eq(RA.ceil(undefined), NaN);
      eq(RA.ceil(NaN), NaN);
      eq(RA.ceil({}), NaN);
      eq(RA.ceil(/a/), NaN);
      eq(RA.ceil('test'), NaN);
      eq(RA.ceil(new Error()), NaN);
    });
  });

  context('given null', function() {
    specify('should return 0', function() {
      eq(RA.ceil(null), 0);
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
        assert.throw(() => RA.ceil(Symbol('')));
      }
    });
  });

  context('given valid date object', function() {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function() {
        eq(RA.ceil(new Date(2)), 2);
      }
    );
  });

  context('given Infinity value', function() {
    specify('should return untouched Infinity value', function() {
      eq(RA.ceil(Infinity), Infinity);
      eq(RA.ceil(-Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const ceil = RA.ceil(R.__);

    eq(ceil(0.9), 1);
  });
});
