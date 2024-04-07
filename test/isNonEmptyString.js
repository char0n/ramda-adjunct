import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isNonEmptyString', function () {
  context('given non empty string', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNonEmptyString('non empty string'));
    });
  });

  context('given empty string or any other value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNonEmptyString(''));
      assert.isFalse(RA.isNonEmptyString(new String('42')));
      assert.isFalse(RA.isNonEmptyString(new String('')));
      assert.isFalse(RA.isNonEmptyString(String.prototype));
      assert.isFalse(RA.isNonEmptyString([]));
      assert.isFalse(RA.isNonEmptyString([42]));
      assert.isFalse(RA.isNonEmptyString(void 0));
      assert.isFalse(RA.isNonEmptyString({}));
      assert.isFalse(RA.isNonEmptyString(null));
      assert.isFalse(RA.isNonEmptyString(undefined));
      assert.isFalse(RA.isNonEmptyString(17));
      assert.isFalse(RA.isNonEmptyString(true));
      assert.isFalse(RA.isNonEmptyString(false));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNonEmptyString = RA.isNonEmptyString(R.__);

    assert.isTrue(isNonEmptyString('non empty string'));
  });
});
