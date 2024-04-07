import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('isNotArray', function () {
  context('given non array value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotArray(void 0));
      assert.isTrue(RA.isNotArray({}));
      assert.isTrue(RA.isNotArray(null));
      assert.isTrue(RA.isNotArray(undefined));
      assert.isTrue(RA.isNotArray(17));
      assert.isTrue(RA.isNotArray('Array'));
      assert.isTrue(RA.isNotArray(true));
      assert.isTrue(RA.isNotArray(true));
      assert.isTrue(RA.isNotArray({ __proto__: Array.prototype }));
    });
  });

  context('given array value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotArray([]));
      assert.isFalse(RA.isNotArray([1]));
      assert.isFalse(RA.isNotArray(new Array()));
      assert.isFalse(RA.isNotArray(Array.prototype));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotArray = RA.isNotArray(R.__);

    assert.isTrue(isNotArray(-1));
  });
});
