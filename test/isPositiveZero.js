import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isPositiveZero', function () {
  context('given a positive zero (+0) or (0)', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isPositiveZero(+0));
      assert.isTrue(RA.isPositiveZero(0));
    });
  });

  context('given a value different from positive zero (+0)', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPositiveZero(-0));
      assert.isFalse(RA.isPositiveZero(null));
      assert.isFalse(RA.isPositiveZero(true));
      assert.isFalse(RA.isPositiveZero(NaN));
      assert.isFalse(RA.isPositiveZero({}));
      assert.isFalse(RA.isPositiveZero([]));
      assert.isFalse(RA.isPositiveZero(() => {}));
      assert.isFalse(RA.isPositiveZero('string'));
      assert.isFalse(RA.isPositiveZero(1));
      assert.isFalse(RA.isPositiveZero(0.1));
      assert.isFalse(RA.isPositiveZero(Object(0.1)));
      assert.isFalse(RA.isPositiveZero(NaN));
      assert.isFalse(RA.isPositiveZero(Infinity));
      assert.isFalse(RA.isPositiveZero(Number.MAX_VALUE));
      assert.isFalse(RA.isPositiveZero(Number.MIN_VALUE));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isPositiveZero = RA.isPositiveZero(R.__);

    assert.isTrue(isPositiveZero(+0));
  });
});
