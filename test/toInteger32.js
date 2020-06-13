import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('toInteger32', function () {
  context('given a small integer', function () {
    specify('should maintain the same value', function () {
      assert.strictEqual(RA.toInteger32(1), 1);
    });

    specify('should preserve the sign', function () {
      assert.strictEqual(RA.toInteger32(-1), -1);
    });
  });

  context('given an integer 1 modulo 23^2', function () {
    specify('should give one when converted', function () {
      const initialValue = 2 ** 32 + 1;
      assert.strictEqual(RA.toInteger32(initialValue), 1);
    });
  });

  context('given an integer -1 modulo 23^2', function () {
    specify('should give one when converted', function () {
      const initialValue = 2 ** 32 - 1;
      assert.strictEqual(RA.toInteger32(initialValue), -1);
    });
  });

  context('given invalid input', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.toInteger32(false), 0);
      assert.strictEqual(RA.toInteger32([]), 0);
      assert.strictEqual(RA.toInteger32(null), 0);
      assert.strictEqual(RA.toInteger32(NaN), 0);
      assert.strictEqual(RA.toInteger32(/a/), 0);
      assert.strictEqual(RA.toInteger32({}), 0);
      assert.strictEqual(RA.toInteger32(new Error()), 0);
    });
  });

  context('given Infinity value', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.toInteger32(Infinity), 0);
      assert.strictEqual(RA.toInteger32(-Infinity), 0);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const toInteger32 = RA.toInteger32(R.__);

    assert.strictEqual(toInteger32(1.2), 1);
  });

  describe('toInt32', function () {
    it('should be alias of seq', function () {
      assert.strictEqual(RA.toInt32, RA.toInteger32);
    });
  });
});
