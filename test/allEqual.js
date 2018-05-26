import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index';

// https://github.com/ramda/ramda/pull/1992
const hasFunctionReferenceEqualityBug = (() => {
  const f = () => {};
  return R.uniq([f, f, f]).length !== 1;
})();

describe('allEqual', function() {
  context('when all items are equal', function() {
    specify('returns true', function() {
      assert.isTrue(RA.allEqual([4, 4, 4, 4]));
    });
  });

  context('when all items are deeply equal', function() {
    specify('should return true', function() {
      assert.isTrue(RA.allEqual([{ key: 'foo' }, { key: 'foo' }]));
    });
  });

  context('when items are not equal', function() {
    specify('should return false', function() {
      assert.isFalse(RA.allEqual([1, 1, 2, 1, 1]));
    });
  });

  context('when items have different type', function() {
    specify('should return false', function() {
      assert.isFalse(RA.allEqual([1, 1, '1', 1]));
    });
  });

  if (!hasFunctionReferenceEqualityBug) {
    context('when items are reference to function', function() {
      specify('should return true', function() {
        const f = () => {};
        assert.isTrue(RA.allEqual([f, f, f]));
      });
    });
  }

  context('when empty list provided', function() {
    specify('should return true', function() {
      assert.isTrue(RA.allEqual([]));
    });
  });
});
