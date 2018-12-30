import { assert } from 'chai';

import * as RA from '../src';
import eq from './shared/eq';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';

describe('inRange', function() {
  context('given integer falls within supplied range', function() {
    specify('should return true', function() {
      const f = RA.inRange(5, 10);
      eq(f(5), true);
      eq(f(9), true);
      eq(f(10), false);
      eq(f(4), false);
      eq(f(11), false);
    });
  });

  context('given float falls within supplied range', function() {
    specify('should return true', function() {
      const f = RA.inRange(5.5, 10.5);
      eq(f(5.5), true);
      eq(f(9.5), true);
      eq(f(10.5), false);
      eq(f(4.5), false);
      eq(f(11.5), false);
    });
  });

  it('should support negative values', function() {
    const f = RA.inRange(-10, -5);
    eq(f(-6), true);
    eq(f(-5), false);
    eq(f(-10), true);
    eq(f(-4), false);
    eq(f(-11), false);
  });

  it('should support currying', function() {
    eq(RA.inRange(5)(10)(5), true);
    eq(RA.inRange(5, 10)(5), true);
    eq(RA.inRange(5)(10, 5), true);
  });

  context('given NAN is used', function() {
    it('should return false', function() {
      eq(RA.inRange(0, NaN, 5), false);
      eq(RA.inRange(NaN, 10, 5), false);
      eq(RA.inRange(5, 10, NaN), false);
    });
  });

  it('should support `Number.POSITIVE_INFINITY`', function() {
    const f = RA.inRange(0, Number.POSITIVE_INFINITY);
    eq(f(Number.MAX_VALUE), true);
  });

  it('should support `Number.NEGATIVE_INFINITY`', function() {
    const f = RA.inRange(Number.NEGATIVE_INFINITY, 0);
    eq(f(Number.NEGATIVE_INFINITY), true);
  });

  it('should support `Number.MIN_VALUE`', function() {
    const f = RA.inRange(Number.MIN_VALUE, 1);
    eq(f(Number.MIN_VALUE), true);
  });

  it('should support `Number.MAX_VALUE`', function() {
    const f = RA.inRange(0, Number.MAX_VALUE);
    eq(f(Number.MAX_VALUE), false);
  });

  context('given `low` value is greater than `high` value', function() {
    it('should throw error', function() {
      const f = RA.inRange(10, 5);
      assert.throws(() => f(5), Error);
    });
  });

  context('given `low` value is same as `high` value', function() {
    it('should throw error', function() {
      const f = RA.inRange(10, 10);
      assert.throws(() => f(5), Error);
    });
  });

  it('should support `Number.MAX_SAFE_INTEGER`', function() {
    const f = RA.inRange(0, MAX_SAFE_INTEGER);
    eq(f(MAX_SAFE_INTEGER), false);
  });

  it('should support `Number.MIN_SAFE_INTEGER`', function() {
    const f = RA.inRange(MIN_SAFE_INTEGER, 0);
    eq(f(MIN_SAFE_INTEGER), true);
  });
});
