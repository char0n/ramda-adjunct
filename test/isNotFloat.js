import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER.js';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER.js';

describe('isNotFloat', function () {
  context('given float number', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotFloat(0.1));
      assert.isFalse(RA.isNotFloat(Math.PI));
      // prettier-ignore
      assert.isFalse(RA.isNotFloat(5.56789+0));
    });
  });

  context('given non float number', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotFloat(0));
      assert.isTrue(RA.isNotFloat(1));
      assert.isTrue(RA.isNotFloat(-100000));
      assert.isTrue(RA.isNotFloat(MAX_SAFE_INTEGER));
      assert.isTrue(RA.isNotFloat(MIN_SAFE_INTEGER));
      // prettier-ignore
      assert.isTrue(RA.isNotFloat(5e+0));

      assert.isTrue(RA.isNotFloat(NaN));
      assert.isTrue(RA.isNotFloat(Infinity));
      assert.isTrue(RA.isNotFloat(-Infinity));
      assert.isTrue(RA.isNotFloat('10'));
      assert.isTrue(RA.isNotFloat(true));
      assert.isTrue(RA.isNotFloat(false));
      assert.isTrue(RA.isNotFloat([1]));
    });
  });

  context('given a number that looks like a float number', function () {
    specify('should treat the number as integer', function () {
      assert.isTrue(RA.isNotFloat(1.0));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotFloat = RA.isNotFloat(R.__);

    assert.isFalse(isNotFloat(1.2));
  });
});
