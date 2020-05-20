import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

// https://github.com/ramda/ramda/pull/1992
const hasFunctionReferenceEqualityBug = (() => {
  const f = () => {};
  return R.uniq([f, f, f]).length !== 1;
})();

describe('notAllEqual', function () {
  context('given all items are equal', function () {
    specify('should return false', function () {
      assert.isFalse(RA.notAllEqual([4, 4, 4, 4]));
    });
  });

  context('given all items are deeply equal', function () {
    specify('should return false', function () {
      assert.isFalse(RA.notAllEqual([{ key: 'foo' }, { key: 'foo' }]));
    });
  });

  context('given items are not equal', function () {
    specify('should return true', function () {
      assert.isTrue(RA.notAllEqual([1, 1, 2, 1, 1]));
    });
  });

  context('given items have different type', function () {
    specify('should return true', function () {
      assert.isTrue(RA.notAllEqual([1, 1, '1', 1]));
    });
  });

  if (!hasFunctionReferenceEqualityBug) {
    context('given items are reference to function', function () {
      specify('should return false', function () {
        const f = () => {};
        assert.isFalse(RA.notAllEqual([f, f, f]));
      });
    });
  }

  context('given empty list provided', function () {
    specify('should return false', function () {
      assert.isFalse(RA.notAllEqual([]));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const notAllEqual = RA.notAllEqual(R.__);

    assert.isFalse(notAllEqual([1, 1, 1]));
    assert.isTrue(notAllEqual([1, 1, 2]));
  });
});
