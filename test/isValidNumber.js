import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isValidNumber', function () {
  context('given a valid `Number`', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isValidNumber(0));
      assert.isTrue(RA.isValidNumber(0.1));
      assert.isTrue(RA.isValidNumber(-0.1));
      assert.isTrue(RA.isValidNumber(1));
      assert.isTrue(RA.isValidNumber(-1));
      assert.isTrue(RA.isValidNumber(MAX_SAFE_INTEGER));
      assert.isTrue(RA.isValidNumber(MIN_SAFE_INTEGER));
      assert.isTrue(RA.isValidNumber(Number.MAX_VALUE));
      assert.isTrue(RA.isValidNumber(Number.MIN_VALUE));
    });
  });

  context('given an invalid `Number` or a non `Number`', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isValidNumber(NaN));
      assert.isFalse(RA.isValidNumber(Infinity));
      assert.isFalse(RA.isValidNumber(-Infinity));
      assert.isFalse(RA.isValidNumber(new Date()));
      assert.isFalse(RA.isValidNumber(args));
      assert.isFalse(RA.isValidNumber([1, 2, 3]));
      assert.isFalse(RA.isValidNumber(Object(false)));
      assert.isFalse(RA.isValidNumber(new Error()));
      assert.isFalse(RA.isValidNumber(RA));
      assert.isFalse(RA.isValidNumber(Array.prototype.slice));
      assert.isFalse(RA.isValidNumber({ a: 1 }));
      assert.isFalse(RA.isValidNumber(/x/));
      assert.isFalse(RA.isValidNumber(Object('a')));

      if (Symbol !== 'undefined') {
        assert.isFalse(RA.isValidNumber(Symbol));
      }

      assert.isFalse(RA.isValidNumber(null));
      assert.isFalse(RA.isValidNumber(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isValidNumber = RA.isValidNumber(R.__);

    assert.isTrue(isValidNumber(7));
  });
});
