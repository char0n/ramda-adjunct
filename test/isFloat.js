import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';

describe('isFloat', function () {
  context('given float number', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isFloat(0.1));
      assert.isTrue(RA.isFloat(Math.PI));
      // prettier-ignore
      assert.isTrue(RA.isFloat(5.56789+0));
    });
  });

  context('given non float number', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isFloat(0));
      assert.isFalse(RA.isFloat(1));
      assert.isFalse(RA.isFloat(-100000));
      assert.isFalse(RA.isFloat(MAX_SAFE_INTEGER));
      assert.isFalse(RA.isFloat(MIN_SAFE_INTEGER));
      // prettier-ignore
      assert.isFalse(RA.isFloat(5e+0));
      assert.isFalse(RA.isFloat(NaN));
      assert.isFalse(RA.isFloat(Infinity));
      assert.isFalse(RA.isFloat(-Infinity));
      assert.isFalse(RA.isFloat('10'));
      assert.isFalse(RA.isFloat(true));
      assert.isFalse(RA.isFloat(false));
      assert.isFalse(RA.isFloat([1]));
    });
  });

  context('given a number that looks like a float number', function () {
    specify('should treat the number as integer', function () {
      assert.isFalse(RA.isFloat(1.0));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isFloat = RA.isFloat(R.__);

    assert.isTrue(isFloat(1.2));
  });
});
