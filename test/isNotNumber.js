import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER.js';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER.js';
import args from './shared/arguments.js';

describe('isNotNumber', function () {
  context('given non number value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotNumber(new Date()));
      assert.isTrue(RA.isNotNumber(args));
      assert.isTrue(RA.isNotNumber([1, 2, 3]));
      assert.isTrue(RA.isNotNumber(Object(true)));
      assert.isTrue(RA.isNotNumber(new Error()));
      assert.isTrue(RA.isNotNumber(RA));
      assert.isTrue(RA.isNotNumber(Array.prototype.slice));
      assert.isTrue(RA.isNotNumber({ a: 1 }));
      assert.isTrue(RA.isNotNumber(/x/));
      assert.isTrue(RA.isNotNumber(Object('a')));
      assert.isTrue(RA.isNotNumber('123'));
      assert.isTrue(RA.isNotNumber(Symbol));
      assert.isTrue(RA.isNotNumber(null));
      assert.isTrue(RA.isNotNumber(undefined));
    });
  });

  context('given number value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotNumber(0));
      assert.isFalse(RA.isNotNumber(0.1));
      assert.isFalse(RA.isNotNumber(Object(0)));
      assert.isFalse(RA.isNotNumber(Object(0.1)));
      assert.isFalse(RA.isNotNumber(NaN));
      assert.isFalse(RA.isNotNumber(Infinity));
      assert.isFalse(RA.isNotNumber(-Infinity));
      assert.isFalse(RA.isNotNumber(MAX_SAFE_INTEGER));
      assert.isFalse(RA.isNotNumber(MIN_SAFE_INTEGER));
      assert.isFalse(RA.isNotNumber(Number.MAX_VALUE));
      assert.isFalse(RA.isNotNumber(Number.MIN_VALUE));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotNumber = RA.isNotNumber(R.__);

    assert.isTrue(isNotNumber([1, 2, 3]));
  });
});
