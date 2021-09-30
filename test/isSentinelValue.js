import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';

describe('isSentinelValue', function () {
  it('should return true for sentinel value', function () {
    assert.isTrue(RA.isSentinelValue(-1));
    assert.isTrue(RA.isSentinelValue(-1.0));
  });

  it('should return false for a non sentinel value', function () {
    assert.isFalse(RA.isSentinelValue('-1'));
    assert.isFalse(RA.isSentinelValue(new Number(-1)));
    assert.isFalse(RA.isSentinelValue(Object(-1)));
    assert.isFalse(RA.isSentinelValue(-1.00001));
    assert.isFalse(RA.isSentinelValue(1));
    assert.isFalse(RA.isSentinelValue(MIN_SAFE_INTEGER));
    assert.isFalse(RA.isSentinelValue(MAX_SAFE_INTEGER));
    assert.isFalse(RA.isSentinelValue(Number.MAX_VALUE));
    assert.isFalse(RA.isSentinelValue(Number.MIN_VALUE));
    assert.isFalse(RA.isSentinelValue(null));
    assert.isFalse(RA.isSentinelValue(undefined));
    assert.isFalse(RA.isSentinelValue(NaN));
    assert.isFalse(RA.isSentinelValue(Infinity));
    assert.isFalse(RA.isSentinelValue(-Infinity));
    assert.isFalse(RA.isSentinelValue(true));
    assert.isFalse(RA.isSentinelValue([]));
    assert.isFalse(RA.isSentinelValue([-1]));
    assert.isFalse(RA.isSentinelValue({}));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isSentinelValue = RA.isSentinelValue(R.__);
    assert.isTrue(isSentinelValue(-1));
    assert.isFalse(isSentinelValue(1));
  });
});
