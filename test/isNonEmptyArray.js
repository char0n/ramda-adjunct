import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('isNonEmptyArray', function () {
  context('given non empty Array', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNonEmptyArray([42]));
      assert.isTrue(RA.isNonEmptyArray(new Array('content')));
    });
  });

  context('given empty Array or any other value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNonEmptyArray([]));
      assert.isFalse(RA.isNonEmptyArray(new Array()));
      assert.isFalse(RA.isNonEmptyArray(new Array(42)));
      assert.isFalse(RA.isNonEmptyArray(Array.prototype));
      assert.isFalse(RA.isNonEmptyArray(void 0));
      assert.isFalse(RA.isNonEmptyArray({}));
      assert.isFalse(RA.isNonEmptyArray(null));
      assert.isFalse(RA.isNonEmptyArray(undefined));
      assert.isFalse(RA.isNonEmptyArray(42));
      assert.isFalse(RA.isNonEmptyArray('Array'));
      assert.isFalse(RA.isNonEmptyArray(true));
      assert.isFalse(RA.isNonEmptyArray(false));
      assert.isFalse(RA.isNonEmptyArray({ __proto__: Array.prototype }));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNonEmptyArray = RA.isNonEmptyArray(R.__);

    assert.isTrue(isNonEmptyArray([1]));
  });
});
