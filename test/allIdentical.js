import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('allIdentical', function () {
  context('given all items are identical', function () {
    specify('returns true', function () {
      assert.isTrue(RA.allIdentical([4, 4, 4, 4]));
    });
  });

  context('given all items are deeply equal', function () {
    specify('should return false', function () {
      assert.isFalse(RA.allIdentical([{ key: 'foo' }, { key: 'foo' }]));
    });
  });

  context('given items are not identical', function () {
    specify('should return false', function () {
      assert.isFalse(RA.allIdentical([1, 1, 2, 1, 1]));
    });
  });

  context('given items have different type', function () {
    specify('should return false', function () {
      assert.isFalse(RA.allIdentical([1, 1, '1', 1]));
    });
  });

  context('given items are reference to function', function () {
    specify('should return true', function () {
      const f = () => {};
      assert.isTrue(RA.allIdentical([f, f, f]));
    });
  });

  context(
    'given items are same functions without the same reference',
    function () {
      specify('should return false', function () {
        const getF = () => () => {};
        assert.isFalse(RA.allIdentical([getF(), getF(), getF()]));
      });
    }
  );

  context('given empty list provided', function () {
    specify('should return true', function () {
      assert.isTrue(RA.allIdentical([]));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const allIdentical = RA.allIdentical(R.__);

    assert.isTrue(allIdentical([1, 1, 1]));
  });
});
