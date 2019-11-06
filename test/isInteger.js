import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import { isIntegerPolyfill } from '../src/isInteger';

describe('isInteger', function() {
  it('should test value for an `integer`', function() {
    assert.isTrue(RA.isInteger(0));
    assert.isTrue(RA.isInteger(1));
    assert.isTrue(RA.isInteger(-100000));
    assert.isTrue(RA.isInteger(MAX_SAFE_INTEGER));
    assert.isTrue(RA.isInteger(MIN_SAFE_INTEGER));
    assert.isTrue(RA.isInteger(5));

    assert.isFalse(RA.isInteger(0.1));
    assert.isFalse(RA.isInteger(Math.PI));
    assert.isFalse(RA.isInteger(5.56789));

    assert.isFalse(RA.isInteger(NaN));
    assert.isFalse(RA.isInteger(Infinity));
    assert.isFalse(RA.isInteger(-Infinity));
    assert.isFalse(RA.isInteger('10'));
    assert.isFalse(RA.isInteger(true));
    assert.isFalse(RA.isInteger(false));
    assert.isFalse(RA.isInteger([1]));
  });

  context('isIntegerPolyfill', function() {
    specify('should test polyfill for an `integer', function() {
      assert.isTrue(isIntegerPolyfill(0));
      assert.isTrue(isIntegerPolyfill(1));
      assert.isTrue(isIntegerPolyfill(-100000));
      assert.isTrue(isIntegerPolyfill(MAX_SAFE_INTEGER));
      assert.isTrue(isIntegerPolyfill(MIN_SAFE_INTEGER));

      assert.isFalse(isIntegerPolyfill(0.1));
      assert.isFalse(isIntegerPolyfill(Math.PI));
      assert.isFalse(isIntegerPolyfill(5.56789));

      assert.isFalse(isIntegerPolyfill(NaN));
      assert.isFalse(isIntegerPolyfill(Infinity));
      assert.isFalse(isIntegerPolyfill(-Infinity));
      assert.isFalse(isIntegerPolyfill('10'));
      assert.isFalse(isIntegerPolyfill(true));
      assert.isFalse(isIntegerPolyfill(false));
      assert.isFalse(isIntegerPolyfill([1]));
    });

    specify('should support placeholder to specify "gaps"', function() {
      const isIntegerPolyfillWithGap = isIntegerPolyfill(R.__);

      assert.isTrue(isIntegerPolyfillWithGap(1));
    });
  });

  context('given a number that looks like a float number', function() {
    specify('should treat the number as integer', function() {
      assert.isTrue(RA.isInteger(1.0));
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const isInteger = RA.isInteger(R.__);

    assert.isTrue(isInteger(1));
  });
});
