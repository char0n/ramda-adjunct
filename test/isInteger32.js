import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';

describe('isInteger32', function () {
  it('should return true for 32 bit integers', function () {
    assert.isTrue(RA.isInteger32(0));
    assert.isTrue(RA.isInteger32(100000));
    assert.isTrue(RA.isInteger32(-100000));
    assert.isTrue(RA.isInteger32(2 ** 31 - 1));
    assert.isTrue(RA.isInteger32((-2) ** 31));
  });

  it('should return false for 64 bit integers', function () {
    assert.isFalse(RA.isInteger32(2 ** 31));
    assert.isFalse(RA.isInteger32((-2) ** 31 - 1));
    assert.isFalse(RA.isInteger32(MIN_SAFE_INTEGER));
    assert.isFalse(RA.isInteger32(MAX_SAFE_INTEGER));
  });

  it('should return false for non integers', function () {
    assert.isFalse(RA.isInteger32(null));
    assert.isFalse(RA.isInteger32(undefined));
    assert.isFalse(RA.isInteger32(NaN));
    assert.isFalse(RA.isInteger32(Infinity));
    assert.isFalse(RA.isInteger32(-Infinity));
    assert.isFalse(RA.isInteger32(0.1));
    assert.isFalse(RA.isInteger32(Math.E));
    assert.isFalse(RA.isInteger32('10'));
    assert.isFalse(RA.isInteger32(false));
    assert.isFalse(RA.isInteger32([]));
    assert.isFalse(RA.isInteger32({}));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isInteger32 = RA.isInteger32(R.__);
    assert.isTrue(isInteger32(0));
  });
});
