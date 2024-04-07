import { assert } from 'chai';

import * as RA from '../src/index.js';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER.js';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER.js';

describe('inRange', function () {
  context('given integer falls within supplied range', function () {
    specify('should return true', function () {
      const f = RA.inRange(5, 10);
      assert.isTrue(f(5));
      assert.isTrue(f(9));
      assert.isFalse(f(10));
      assert.isFalse(f(4));
      assert.isFalse(f(11));
    });
  });

  context('given float falls within supplied range', function () {
    specify('should return true', function () {
      const f = RA.inRange(5.5, 10.5);
      assert.isTrue(f(5.5));
      assert.isTrue(f(9.5));
      assert.isFalse(f(10.5));
      assert.isFalse(f(4.5));
      assert.isFalse(f(11.5));
    });
  });

  it('should support negative values', function () {
    const f = RA.inRange(-10, -5);
    assert.isTrue(f(-6));
    assert.isFalse(f(-5));
    assert.isTrue(f(-10));
    assert.isFalse(f(-4));
    assert.isFalse(f(-11));
  });

  context('given NAN is used', function () {
    it('should return false', function () {
      assert.isFalse(RA.inRange(0, NaN, 5));
      assert.isFalse(RA.inRange(NaN, 10, 5));
      assert.isFalse(RA.inRange(5, 10, NaN));
    });
  });

  it('should support `Number.POSITIVE_INFINITY`', function () {
    const f = RA.inRange(0, Number.POSITIVE_INFINITY);
    assert.isTrue(f(Number.MAX_VALUE));
  });

  it('should support `Number.NEGATIVE_INFINITY`', function () {
    const f = RA.inRange(Number.NEGATIVE_INFINITY, 0);
    assert.isTrue(f(Number.NEGATIVE_INFINITY));
  });

  it('should support `Number.MIN_VALUE`', function () {
    const f = RA.inRange(Number.MIN_VALUE, 1);
    assert.isTrue(f(Number.MIN_VALUE));
  });

  it('should support `Number.MAX_VALUE`', function () {
    const f = RA.inRange(0, Number.MAX_VALUE);
    assert.isFalse(f(Number.MAX_VALUE));
  });

  context('given `low` value is greater than `high` value', function () {
    it('should throw error', function () {
      const f = RA.inRange(10, 5);
      assert.throws(() => f(5), Error);
    });
  });

  context('given `low` value is same as `high` value', function () {
    it('should throw error', function () {
      const f = RA.inRange(10, 10);
      assert.throws(() => f(5), Error);
    });
  });

  it('should support `Number.MAX_SAFE_INTEGER`', function () {
    const f = RA.inRange(0, MAX_SAFE_INTEGER);
    assert.isFalse(f(MAX_SAFE_INTEGER));
  });

  it('should support `Number.MIN_SAFE_INTEGER`', function () {
    const f = RA.inRange(MIN_SAFE_INTEGER, 0);
    assert.isTrue(f(MIN_SAFE_INTEGER));
  });

  it('should support currying', function () {
    assert.isTrue(RA.inRange(5)(10)(5));
    assert.isTrue(RA.inRange(5, 10)(5));
    assert.isTrue(RA.inRange(5)(10, 5));
  });
});
