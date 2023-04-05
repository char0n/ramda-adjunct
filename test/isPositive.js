import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';

describe('isPositive', function () {
  context('given a positive `Number`', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isPositive(0.1));
      assert.isTrue(RA.isPositive(Object(0.1)));
      assert.isTrue(RA.isPositive(Infinity));
      assert.isTrue(RA.isPositive(MAX_SAFE_INTEGER));
      assert.isTrue(RA.isPositive(Number.MAX_VALUE));
      assert.isTrue(RA.isPositive(Number.MIN_VALUE));
    });
  });

  context('given a non-positive `Number`', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPositive(0));
      assert.isFalse(RA.isPositive(Object(0)));
      assert.isFalse(RA.isPositive(NaN));
      assert.isFalse(RA.isPositive(-Infinity));
      assert.isFalse(RA.isPositive(MIN_SAFE_INTEGER));
    });
  });

  context('given a non-`Number`', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPositive(new Date()));
      assert.isFalse(RA.isPositive(args));
      assert.isFalse(RA.isPositive([1, 2, 3]));
      assert.isFalse(RA.isPositive(Object(false)));
      assert.isFalse(RA.isPositive(new Error()));
      assert.isFalse(RA.isPositive(RA));
      assert.isFalse(RA.isPositive(Array.prototype.slice));
      assert.isFalse(RA.isPositive({ a: 1 }));
      assert.isFalse(RA.isPositive(/x/));
      assert.isFalse(RA.isPositive(Object('a')));
      assert.isFalse(RA.isPositive(Symbol));
      assert.isFalse(RA.isPositive(null));
      assert.isFalse(RA.isPositive(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isPositive = RA.isPositive(R.__);

    assert.isTrue(isPositive(7));
  });
});
