import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isNotNull', function () {
  context('given non null value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotNull(void 0));
      assert.isTrue(RA.isNotNull([]));
      assert.isTrue(RA.isNotNull({}));
      assert.isTrue(RA.isNotNull(0));
      assert.isTrue(RA.isNotNull(''));
    });
  });

  context('given null value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotNull(null));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotNull = RA.isNotNull(R.__);

    assert.isTrue(isNotNull(0));
  });
});
