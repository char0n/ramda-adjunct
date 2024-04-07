import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER.js';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER.js';

describe('isUinteger32', function () {
  it('should return true for positive 32 bit integers', function () {
    assert.isTrue(RA.isUinteger32(0));
    assert.isTrue(RA.isUinteger32(100000));
    assert.isTrue(RA.isUinteger32(2 ** 32 - 1));
  });

  it('should return false for negative 32 bit integers', function () {
    assert.isFalse(RA.isUinteger32(-1));
    assert.isFalse(RA.isUinteger32(-(2 ** 32 - 1)));
  });

  it('should return false for 64 bit integers', function () {
    assert.isFalse(RA.isUinteger32(2 ** 32));
    assert.isFalse(RA.isUinteger32(MIN_SAFE_INTEGER));
    assert.isFalse(RA.isUinteger32(MAX_SAFE_INTEGER));
  });

  it('should return false for non integers', function () {
    assert.isFalse(RA.isUinteger32(null));
    assert.isFalse(RA.isUinteger32(undefined));
    assert.isFalse(RA.isUinteger32(NaN));
    assert.isFalse(RA.isUinteger32(Infinity));
    assert.isFalse(RA.isUinteger32(-Infinity));
    assert.isFalse(RA.isUinteger32(0.1));
    assert.isFalse(RA.isUinteger32(Math.E));
    assert.isFalse(RA.isUinteger32('10'));
    assert.isFalse(RA.isUinteger32(false));
    assert.isFalse(RA.isUinteger32([]));
    assert.isFalse(RA.isUinteger32({}));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isUinteger32 = RA.isUinteger32(R.__);
    assert.isTrue(isUinteger32(0));
  });
});
