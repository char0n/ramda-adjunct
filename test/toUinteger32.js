import { assert } from 'chai';

import * as RA from '../src';

describe('toUinteger32', function () {
  context('given a floating point number', function () {
    specify('should drop decimal values', function () {
      assert.strictEqual(RA.toUinteger32(123.456), 123);
      assert.strictEqual(RA.toUinteger32(0.123456), 0);

      assert.strictEqual(RA.toUint32(123.456), 123);
      assert.strictEqual(RA.toUint32(0.12345), 0);
    });

    specify('should return an unsigned (non-negative) integer', function () {
      assert.isAtLeast(RA.toUinteger32(-1.23456), 0);

      assert.isAtLeast(RA.toUint32(-1.23456), 0);
    });
  });

  context('given an integer', function () {
    specify('should return the same value', function () {
      assert.strictEqual(RA.toUinteger32(123), 123);
      assert.strictEqual(RA.toUinteger32(0), 0);

      assert.strictEqual(RA.toUint32(123), 123);
      assert.strictEqual(RA.toUint32(0), 0);
    });
  });

  context('given a non `number` type value', function () {
    specify('should return an unsigned (non-negative) integer', function () {
      assert.isAtLeast(RA.toUinteger32(true), 0);
      assert.isAtLeast(RA.toUinteger32([1, 2, 3]), 0);
      assert.isAtLeast(RA.toUinteger32(Array.prototype.slice), 0);
      assert.isAtLeast(RA.toUinteger32({}), 0);
      assert.isAtLeast(RA.toUinteger32(/x/), 0);
      assert.isAtLeast(RA.toUinteger32(null), 0);
      assert.isAtLeast(RA.toUinteger32(NaN), 0);

      assert.isAtLeast(RA.toUint32(true), 0);
      assert.isAtLeast(RA.toUint32([1, 2, 3]), 0);
      assert.isAtLeast(RA.toUint32(Array.prototype.slice), 0);
      assert.isAtLeast(RA.toUint32({}), 0);
      assert.isAtLeast(RA.toUint32(/x/), 0);
      assert.isAtLeast(RA.toUint32(null), 0);
      assert.isAtLeast(RA.toUint32(NaN), 0);
    });
  });

  context('given min or max floating point number', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.toUinteger32(Number.MIN_VALUE), 0);
      assert.strictEqual(RA.toUinteger32(Number.MAX_VALUE), 0);

      assert.strictEqual(RA.toUint32(Number.MIN_VALUE), 0);
      assert.strictEqual(RA.toUint32(Number.MAX_VALUE), 0);
    });
  });

  context('given infinity', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.toUinteger32(Infinity), 0);
      assert.strictEqual(RA.toUinteger32(Number.POSITIVE_INFINITY), 0);
      assert.strictEqual(RA.toUinteger32(Number.NEGATIVE_INFINITY), 0);

      assert.strictEqual(RA.toUint32(Infinity), 0);
      assert.strictEqual(RA.toUint32(Number.POSITIVE_INFINITY), 0);
      assert.strictEqual(RA.toUint32(Number.NEGATIVE_INFINITY), 0);
    });
  });
});
