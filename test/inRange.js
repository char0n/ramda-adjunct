import chai from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';

const supportsMinMaxSafeInt = R.all(RA.isNotUndefined, [
  Number.MAX_SAFE_INTEGER,
  Number.MIN_SAFE_INTEGER,
]);

describe('inRange', function() {
  it('tests whether a value falls within supplied range', function() {
    const f = RA.inRange(5, 10);
    eq(f(5), true);
    eq(f(10), true);
    eq(f(4), false);
    eq(f(11), false);
  });

  it('supports negative values', function() {
    const f = RA.inRange(-10, -5);
    eq(f(-5), true);
    eq(f(-10), true);
    eq(f(-4), false);
    eq(f(-11), false);
  });

  it('supports identical `low` and `high` values', function() {
    const f = RA.inRange(5, 5);
    eq(f(5), true);
    eq(f(4.999), false);
    eq(f(5.001), false);
  });

  it('supports `Number.POSITIVE_INFINITY`', function() {
    const f = RA.inRange(0, Number.POSITIVE_INFINITY);
    eq(f(Number.POSITIVE_INFINITY), true);
  });

  it('supports `Number.NEGATIVE_INFINITY`', function() {
    const f = RA.inRange(Number.NEGATIVE_INFINITY, 0);
    eq(f(Number.NEGATIVE_INFINITY), true);
  });

  it('supports `Number.MIN_VALUE`', function() {
    const f = RA.inRange(0, Number.MIN_VALUE);
    eq(f(Number.MIN_VALUE), true);
  });

  it('supports `Number.MAX_VALUE`', function() {
    const f = RA.inRange(0, Number.MAX_VALUE);
    eq(f(Number.MAX_VALUE), true);
  });

  it('throws if `low` value is greater than `high` value', function() {
    const f = RA.inRange(10, 5);
    chai.assert.throws(function fn() {
      return f(5);
    }, Error);
  });

  if (supportsMinMaxSafeInt) {
    it('supports `Number.MAX_SAFE_INTEGER`', function() {
      const f = RA.inRange(0, Number.MAX_SAFE_INTEGER);
      eq(f(Number.MAX_SAFE_INTEGER), true);
    });

    it('supports `Number.MIN_SAFE_INTEGER`', function() {
      const f = RA.inRange(Number.MIN_SAFE_INTEGER, 0);
      eq(f(Number.MIN_SAFE_INTEGER), true);
    });
  }
});
