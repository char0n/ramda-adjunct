import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER.js';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER.js';
import args from './shared/arguments.js';

describe('isOdd', function () {
  context('given an odd integer `Number`', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isOdd(3));
      assert.isTrue(RA.isOdd(7));
      assert.isTrue(RA.isOdd(-3));
      assert.isTrue(RA.isOdd(-7));
      assert.isTrue(RA.isOdd(MAX_SAFE_INTEGER));
      assert.isTrue(RA.isOdd(MIN_SAFE_INTEGER));
    });
  });

  context('given an even integer `Number` or non-`Number`', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isOdd(0));
      assert.isFalse(RA.isOdd(4));
      assert.isFalse(RA.isOdd(Object(0)));
      assert.isFalse(RA.isOdd(Object(0.1)));
      assert.isFalse(RA.isOdd(NaN));
      assert.isFalse(RA.isOdd(-Infinity));
      assert.isFalse(RA.isOdd(Number.MAX_VALUE));
      assert.isFalse(RA.isOdd(Number.MIN_VALUE));
      assert.isFalse(RA.isOdd(new Date()));
      assert.isFalse(RA.isOdd(args));
      assert.isFalse(RA.isOdd([1, 2, 3]));
      assert.isFalse(RA.isOdd(Object(false)));
      assert.isFalse(RA.isOdd(new Error()));
      assert.isFalse(RA.isOdd(RA));
      assert.isFalse(RA.isOdd(Array.prototype.slice));
      assert.isFalse(RA.isOdd({ a: 1 }));
      assert.isFalse(RA.isOdd(/x/));
      assert.isFalse(RA.isOdd(Object('a')));
      assert.isFalse(RA.isOdd(Symbol));
      assert.isFalse(RA.isOdd(null));
      assert.isFalse(RA.isOdd(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isOdd = RA.isOdd(R.__);

    assert.isTrue(isOdd(7));
  });
});
