import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import { isIntegerPolyfill } from '../src/isInteger';

describe('isInteger', function() {
  it('should test value for an `integer`', function() {
    eq(RA.isInteger(0), true);
    eq(RA.isInteger(1), true);
    eq(RA.isInteger(-100000), true);
    eq(RA.isInteger(MAX_SAFE_INTEGER), true);
    eq(RA.isInteger(MIN_SAFE_INTEGER), true);
    eq(RA.isInteger(5), true);

    eq(RA.isInteger(0.1), false);
    eq(RA.isInteger(Math.PI), false);
    eq(RA.isInteger(5.56789), false);

    eq(RA.isInteger(NaN), false);
    eq(RA.isInteger(Infinity), false);
    eq(RA.isInteger(-Infinity), false);
    eq(RA.isInteger('10'), false);
    eq(RA.isInteger(true), false);
    eq(RA.isInteger(false), false);
    eq(RA.isInteger([1]), false);
  });

  context('isIntegerPolyfill', function() {
    specify('should test polyfill for an `integer', function() {
      eq(isIntegerPolyfill(0), true);
      eq(isIntegerPolyfill(1), true);
      eq(isIntegerPolyfill(-100000), true);
      eq(isIntegerPolyfill(MAX_SAFE_INTEGER), true);
      eq(isIntegerPolyfill(MIN_SAFE_INTEGER), true);

      eq(isIntegerPolyfill(0.1), false);
      eq(isIntegerPolyfill(Math.PI), false);
      eq(isIntegerPolyfill(5.56789), false);

      eq(isIntegerPolyfill(NaN), false);
      eq(isIntegerPolyfill(Infinity), false);
      eq(isIntegerPolyfill(-Infinity), false);
      eq(isIntegerPolyfill('10'), false);
      eq(isIntegerPolyfill(true), false);
      eq(isIntegerPolyfill(false), false);
      eq(isIntegerPolyfill([1]), false);
    });

    specify('should support placeholder to specify "gaps"', function() {
      const isIntegerPolyfillWithGap = isIntegerPolyfill(R.__);

      eq(isIntegerPolyfillWithGap(1), true);
    });
  });

  context('given a number that looks like a float number', function() {
    specify('should treat the number as integer', function() {
      eq(RA.isInteger(1.0), true);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const isInteger = RA.isInteger(R.__);

    eq(isInteger(1), true);
  });
});
