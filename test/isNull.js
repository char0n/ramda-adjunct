import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('isNull', function () {
  context('given a null value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNull(null));
    });
  });

  context('given a non-null value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNull(void 0));
      assert.isFalse(RA.isNull([]));
      assert.isFalse(RA.isNull({}));
      assert.isFalse(RA.isNull(0));
      assert.isFalse(RA.isNull(''));
      assert.isFalse(RA.isNull(Symbol));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNull = RA.isNull(R.__);

    assert.isTrue(isNull(null));
  });
});
