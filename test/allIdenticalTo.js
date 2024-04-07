import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('allIdenticalTo', function () {
  context('given all items are identical', function () {
    specify('returns true', function () {
      assert.isTrue(RA.allIdenticalTo(4, [4, 4, 4, 4]));
    });
  });

  context('given all items are deeply equal', function () {
    specify('should return false', function () {
      assert.isFalse(
        RA.allIdenticalTo({ key: 'foo' }, [{ key: 'foo' }, { key: 'foo' }])
      );
    });
  });

  context('given items are not identical', function () {
    specify('should return false', function () {
      assert.isFalse(RA.allIdenticalTo(1, [1, 1, 2, 1, 1]));
    });
  });

  context('given items have different type', function () {
    specify('should return false', function () {
      assert.isFalse(RA.allIdenticalTo(1, [1, 1, '1', 1]));
    });
  });

  context('given items are reference to function', function () {
    specify('should return true', function () {
      const f = () => {};
      assert.isTrue(RA.allIdenticalTo(f, [f, f, f]));
    });
  });

  context('given empty list provided', function () {
    specify('should return true', function () {
      assert.isTrue(RA.allIdenticalTo(1, []));
    });
  });

  context(
    'given items are same functions without the same reference',
    function () {
      specify('should return false', function () {
        const getF = () => () => {};
        assert.isFalse(RA.allIdenticalTo(getF(), [getF(), getF(), getF()]));
      });
    }
  );

  it('should curry', function () {
    assert.isTrue(RA.allIdenticalTo(1, [1, 1]));
    assert.isTrue(RA.allIdenticalTo(1)([1, 1]));
  });
});
