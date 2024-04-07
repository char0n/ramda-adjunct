import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER.js';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER.js';
import args from './shared/arguments.js';

describe('isNonPositive', function () {
  context('given non positive number', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNonPositive(0));
      assert.isTrue(RA.isNonPositive(-0.1));
      assert.isTrue(RA.isNonPositive(Object(0)));
      assert.isTrue(RA.isNonPositive(Object(-0.1)));
      assert.isTrue(RA.isNonPositive(-Infinity));
      assert.isTrue(RA.isNonPositive(MIN_SAFE_INTEGER));
    });
  });

  context('given positive number or any other value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNonPositive(0.1));
      assert.isFalse(RA.isNonPositive(Object(0.1)));
      assert.isFalse(RA.isNonPositive(NaN));
      assert.isFalse(RA.isNonPositive(Infinity));
      assert.isFalse(RA.isNonPositive(MAX_SAFE_INTEGER));
      assert.isFalse(RA.isNonPositive(Number.MAX_VALUE));
      assert.isFalse(RA.isNonPositive(Number.MIN_VALUE));

      assert.isFalse(RA.isNonPositive(new Date()));
      assert.isFalse(RA.isNonPositive(args));
      assert.isFalse(RA.isNonPositive([1, 2, 3]));
      assert.isFalse(RA.isNonPositive(Object(false)));
      assert.isFalse(RA.isNonPositive(new Error()));
      assert.isFalse(RA.isNonPositive(RA));
      assert.isFalse(RA.isNonPositive(Array.prototype.slice));
      assert.isFalse(RA.isNonPositive({ a: 1 }));
      assert.isFalse(RA.isNonPositive(/x/));
      assert.isFalse(RA.isNonPositive(Object('a')));
      assert.isFalse(RA.isNonPositive(Symbol));
      assert.isFalse(RA.isNonPositive(null));
      assert.isFalse(RA.isNonPositive(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNonPositive = RA.isNonPositive(R.__);

    assert.isTrue(isNonPositive(-1));
  });
});
