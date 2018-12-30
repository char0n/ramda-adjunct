import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';

describe('isFloat', function() {
  context('given float number', function() {
    specify('should return true', function() {
      eq(RA.isFloat(0.1), true);
      eq(RA.isFloat(Math.PI), true);
      // prettier-ignore
      eq(RA.isFloat(5.56789+0), true);
    });
  });

  context('given non float number', function() {
    specify('should return false', function() {
      eq(RA.isFloat(0), false);
      eq(RA.isFloat(1), false);
      eq(RA.isFloat(-100000), false);
      eq(RA.isFloat(MAX_SAFE_INTEGER), false);
      eq(RA.isFloat(MIN_SAFE_INTEGER), false);
      // prettier-ignore
      eq(RA.isFloat(5e+0), false);
      eq(RA.isFloat(NaN), false);
      eq(RA.isFloat(Infinity), false);
      eq(RA.isFloat(-Infinity), false);
      eq(RA.isFloat('10'), false);
      eq(RA.isFloat(true), false);
      eq(RA.isFloat(false), false);
      eq(RA.isFloat([1]), false);
    });
  });

  context('given number that looks like float number', function() {
    specify('should treat the number as integer', function() {
      eq(RA.isFloat(1.0), false);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const isFloat = RA.isFloat(R.__);

    eq(isFloat(1.2), true);
  });
});
