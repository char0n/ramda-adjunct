import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';

describe('isNonNegative', function () {
  context('given non negative number', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNonNegative(0));
      assert.isTrue(RA.isNonNegative(0.1));
      assert.isTrue(RA.isNonNegative(Object(0)));
      assert.isTrue(RA.isNonNegative(Object(0.1)));
      assert.isTrue(RA.isNonNegative(Infinity));
      assert.isTrue(RA.isNonNegative(MAX_SAFE_INTEGER));
      assert.isTrue(RA.isNonNegative(Number.MAX_VALUE));
      assert.isTrue(RA.isNonNegative(Number.MIN_VALUE));
    });
  });

  context('given negative number or any other value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNonNegative(-0.1));
      assert.isFalse(RA.isNonNegative(Object(-0.1)));
      assert.isFalse(RA.isNonNegative(NaN));
      assert.isFalse(RA.isNonNegative(-Infinity));
      assert.isFalse(RA.isNonNegative(MIN_SAFE_INTEGER));

      assert.isFalse(RA.isNonNegative(new Date()));
      assert.isFalse(RA.isNonNegative(args));
      assert.isFalse(RA.isNonNegative([1, 2, 3]));
      assert.isFalse(RA.isNonNegative(Object(false)));
      assert.isFalse(RA.isNonNegative(new Error()));
      assert.isFalse(RA.isNonNegative(RA));
      assert.isFalse(RA.isNonNegative(Array.prototype.slice));
      assert.isFalse(RA.isNonNegative({ a: 1 }));
      assert.isFalse(RA.isNonNegative(/x/));
      assert.isFalse(RA.isNonNegative(Object('a')));
      assert.isFalse(RA.isNonNegative(Symbol));
      assert.isFalse(RA.isNonNegative(null));
      assert.isFalse(RA.isNonNegative(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNonNegative = RA.isNonNegative(R.__);

    assert.isTrue(isNonNegative(1));
  });
});
