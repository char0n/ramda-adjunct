import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import { isSafeIntegerPonyfill } from '../src/isSafeInteger';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';

describe('isSafeInteger', function () {
  context('given a safe integer', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isSafeInteger(3));
      assert.isTrue(RA.isSafeInteger(MAX_SAFE_INTEGER));
      assert.isTrue(RA.isSafeInteger(3.0));
    });
  });

  context('given not safe integer', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isSafeInteger(MAX_SAFE_INTEGER + 1));
      assert.isFalse(RA.isSafeInteger(NaN));
      assert.isFalse(RA.isSafeInteger(Infinity));
      assert.isFalse(RA.isSafeInteger('3'));
      assert.isFalse(RA.isSafeInteger(3.1));
      assert.isFalse(RA.isSafeInteger('string'));
      assert.isFalse(RA.isSafeInteger(null));
      assert.isFalse(RA.isSafeInteger(undefined));
      assert.isFalse(RA.isSafeInteger({}));
      assert.isFalse(RA.isSafeInteger(() => {}));
      assert.isFalse(RA.isSafeInteger(true));
    });
  });

  specify('should support placeholder to specify "gaps"', function () {
    const isSafeInteger = RA.isSafeInteger(R.__);

    assert.isTrue(isSafeInteger(3));
  });

  context('isSafeIntegerPonyfill', function () {
    context('given a safe integer', function () {
      specify('should return true', function () {
        assert.isTrue(isSafeIntegerPonyfill(3));
        assert.isTrue(isSafeIntegerPonyfill(MAX_SAFE_INTEGER));
        assert.isTrue(isSafeIntegerPonyfill(3.0));
      });
    });

    context('given not safe integer', function () {
      specify('should return false', function () {
        assert.isFalse(isSafeIntegerPonyfill(MAX_SAFE_INTEGER + 1));
        assert.isFalse(isSafeIntegerPonyfill(NaN));
        assert.isFalse(isSafeIntegerPonyfill(Infinity));
        assert.isFalse(isSafeIntegerPonyfill('3'));
        assert.isFalse(isSafeIntegerPonyfill(3.1));
        assert.isFalse(isSafeIntegerPonyfill('string'));
        assert.isFalse(isSafeIntegerPonyfill(null));
        assert.isFalse(isSafeIntegerPonyfill(undefined));
        assert.isFalse(isSafeIntegerPonyfill({}));
        assert.isFalse(isSafeIntegerPonyfill(() => {}));
        assert.isFalse(isSafeIntegerPonyfill(true));
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const isSafeInteger = isSafeIntegerPonyfill(R.__);

      assert.isTrue(isSafeInteger(3));
    });
  });
});
