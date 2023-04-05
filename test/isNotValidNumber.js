import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';

describe('isNotValidNumber', function () {
  context('given a non-number value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotValidNumber(NaN));
      assert.isTrue(RA.isNotValidNumber(Infinity));
      assert.isTrue(RA.isNotValidNumber(-Infinity));
      assert.isTrue(RA.isNotValidNumber(new Date()));
      assert.isTrue(RA.isNotValidNumber(args));
      assert.isTrue(RA.isNotValidNumber([1, 2, 3]));
      assert.isTrue(RA.isNotValidNumber(Object(true)));
      assert.isTrue(RA.isNotValidNumber(new Error()));
      assert.isTrue(RA.isNotValidNumber(RA));
      assert.isTrue(RA.isNotValidNumber(Array.prototype.slice));
      assert.isTrue(RA.isNotValidNumber({ a: 1 }));
      assert.isTrue(RA.isNotValidNumber(/x/));
      assert.isTrue(RA.isNotValidNumber(Object('a')));
      assert.isTrue(RA.isNotValidNumber(Symbol));
      assert.isTrue(RA.isNotValidNumber(null));
      assert.isTrue(RA.isNotValidNumber(undefined));
    });
  });

  context('given a number value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotValidNumber(0));
      assert.isFalse(RA.isNotValidNumber(0.1));
      assert.isFalse(RA.isNotValidNumber(-0.1));
      assert.isFalse(RA.isNotValidNumber(1));
      assert.isFalse(RA.isNotValidNumber(-1));
      assert.isFalse(RA.isNotValidNumber(MAX_SAFE_INTEGER));
      assert.isFalse(RA.isNotValidNumber(MIN_SAFE_INTEGER));
      assert.isFalse(RA.isNotValidNumber(Number.MAX_VALUE));
      assert.isFalse(RA.isNotValidNumber(Number.MIN_VALUE));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotValidNumber = RA.isNotValidNumber(R.__);

    assert.isTrue(isNotValidNumber(null));
  });
});
