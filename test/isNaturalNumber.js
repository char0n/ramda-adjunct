import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';

describe('isNaturalNumber', function () {
  context('given natural number', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNaturalNumber(0));
      assert.isTrue(RA.isNaturalNumber(1));
      assert.isTrue(RA.isNaturalNumber(MAX_SAFE_INTEGER));
      assert.isTrue(RA.isNaturalNumber(+0));
      assert.isTrue(RA.isNaturalNumber(-0));
    });
  });

  context('given float or negative number', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNaturalNumber(-100000));
      assert.isFalse(RA.isNaturalNumber(1.25));
      assert.isFalse(RA.isNaturalNumber(-1.25));
      assert.isFalse(RA.isNaturalNumber(NaN));
      assert.isFalse(RA.isNaturalNumber(-Infinity));
      assert.isFalse(RA.isNaturalNumber('10'));
      assert.isFalse(RA.isNaturalNumber(true));
      assert.isFalse(RA.isNaturalNumber(false));
      assert.isFalse(RA.isNaturalNumber([1]));
      assert.isFalse(RA.isNaturalNumber(MIN_SAFE_INTEGER));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNaturalNumber = RA.isNaturalNumber(R.__);

    assert.isTrue(isNaturalNumber(1));
  });
});
