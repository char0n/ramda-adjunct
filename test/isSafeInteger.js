import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';

describe('isSafeInteger', function() {
  context('given a safe integer', function() {
    specify('should return true', function() {
      assert.isTrue(RA.isSafeInteger(3));
      assert.isTrue(RA.isSafeInteger(MAX_SAFE_INTEGER));
      assert.isTrue(RA.isSafeInteger(3.0));
    });
  });

  context('given not safe integer', function() {
    specify('should return false', function() {
      assert.isFalse(RA.isSafeInteger(MAX_SAFE_INTEGER + 1));
      assert.isFalse(RA.isSafeInteger(NaN));
      assert.isFalse(RA.isSafeInteger(Infinity));
      assert.isFalse(RA.isSafeInteger('3'));
      assert.isFalse(RA.isSafeInteger(3.1));
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const isSafeInteger = RA.isSafeInteger(R.__);

    assert.isTrue(isSafeInteger(3));
  });
});
