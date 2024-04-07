import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isUndefined', function () {
  context('given an `undefined` value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isUndefined(void 0));
      assert.isTrue(RA.isUndefined(undefined));
    });
  });

  context('given a non `undefined` value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isUndefined(null));
      assert.isFalse(RA.isUndefined([]));
      assert.isFalse(RA.isUndefined({}));
      assert.isFalse(RA.isUndefined(0));
      assert.isFalse(RA.isUndefined(''));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isUndefined = RA.isUndefined(R.__);

    assert.isTrue(isUndefined(undefined));
  });
});
