import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER.js';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER.js';

describe('isNotInteger', function () {
  it('should test value for an `integer`', function () {
    assert.isFalse(RA.isNotInteger(0));
    assert.isFalse(RA.isNotInteger(1));
    assert.isFalse(RA.isNotInteger(-100000));
    assert.isFalse(RA.isNotInteger(MAX_SAFE_INTEGER));
    assert.isFalse(RA.isNotInteger(MIN_SAFE_INTEGER));
    assert.isFalse(RA.isNotInteger(5));

    assert.isTrue(RA.isNotInteger(0.1));
    assert.isTrue(RA.isNotInteger(Math.PI));
    assert.isTrue(RA.isNotInteger(5.56789));

    assert.isTrue(RA.isNotInteger(NaN));
    assert.isTrue(RA.isNotInteger(Infinity));
    assert.isTrue(RA.isNotInteger(-Infinity));
    assert.isTrue(RA.isNotInteger('10'));
    assert.isTrue(RA.isNotInteger(true));
    assert.isTrue(RA.isNotInteger(false));
    assert.isTrue(RA.isNotInteger([1]));
  });

  context('given a number that looks like a float number', function () {
    specify('should treat the number as integer', function () {
      assert.isFalse(RA.isNotInteger(1.0));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotInteger = RA.isNotInteger(R.__);

    assert.isFalse(isNotInteger(1));
  });
});
