import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isNotUndefined', function () {
  context('given a non-undefined value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotUndefined(null));
      assert.isTrue(RA.isNotUndefined([]));
      assert.isTrue(RA.isNotUndefined({}));
      assert.isTrue(RA.isNotUndefined(0));
      assert.isTrue(RA.isNotUndefined(''));
      assert.isTrue(RA.isNotUndefined(Symbol));
    });
  });

  context('given an undefined value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotUndefined(void 0));
      assert.isFalse(RA.isNotUndefined(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotUndefined = RA.isNotUndefined(R.__);

    assert.isTrue(isNotUndefined(null));
  });
});
