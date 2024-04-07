import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isNegativeZero', function () {
  context('given a negative zero (-0)', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNegativeZero(-0));
    });
  });

  context('given a value different from negative zero (-0)', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNegativeZero(+0));
      assert.isFalse(RA.isNegativeZero(null));
      assert.isFalse(RA.isNegativeZero(true));
      assert.isFalse(RA.isNegativeZero(NaN));
      assert.isFalse(RA.isNegativeZero({}));
      assert.isFalse(RA.isNegativeZero([]));
      assert.isFalse(RA.isNegativeZero(() => {}));
      assert.isFalse(RA.isNegativeZero('string'));
      assert.isFalse(RA.isNegativeZero(1));
      assert.isFalse(RA.isNegativeZero(0.1));
      assert.isFalse(RA.isNegativeZero(Object(0.1)));
      assert.isFalse(RA.isNegativeZero(NaN));
      assert.isFalse(RA.isNegativeZero(Infinity));
      assert.isFalse(RA.isNegativeZero(Number.MAX_VALUE));
      assert.isFalse(RA.isNegativeZero(Number.MIN_VALUE));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNegativeZero = RA.isNegativeZero(R.__);

    assert.isTrue(isNegativeZero(-0));
  });
});
