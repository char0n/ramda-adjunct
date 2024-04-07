import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER.js';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER.js';
import { isIntegerPonyfill } from '../src/isInteger.js';

describe('isInteger', function () {
  it('should test value for an `integer`', function () {
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

  context('isIntegerPonyfill', function () {
    specify('should test ponyfill for an `integer', function () {
      assert.isTrue(isIntegerPonyfill(0));
      assert.isTrue(isIntegerPonyfill(1));
      assert.isTrue(isIntegerPonyfill(-100000));
      assert.isTrue(isIntegerPonyfill(MAX_SAFE_INTEGER));
      assert.isTrue(isIntegerPonyfill(MIN_SAFE_INTEGER));

      assert.isFalse(isIntegerPonyfill(0.1));
      assert.isFalse(isIntegerPonyfill(Math.PI));
      assert.isFalse(isIntegerPonyfill(5.56789));

      assert.isFalse(isIntegerPonyfill(NaN));
      assert.isFalse(isIntegerPonyfill(Infinity));
      assert.isFalse(isIntegerPonyfill(-Infinity));
      assert.isFalse(isIntegerPonyfill('10'));
      assert.isFalse(isIntegerPonyfill(true));
      assert.isFalse(isIntegerPonyfill(false));
      assert.isFalse(isIntegerPonyfill([1]));
    });

    specify('should support placeholder to specify "gaps"', function () {
      const isIntegerPonyfillWithGap = isIntegerPonyfill(R.__);

      assert.isTrue(isIntegerPonyfillWithGap(1));
    });
  });

  context('given a number that looks like a float number', function () {
    specify('should treat the number as integer', function () {
      assert.isTrue(RA.isInteger(1.0));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isInteger = RA.isInteger(R.__);

    assert.isTrue(isInteger(1));
  });
});
