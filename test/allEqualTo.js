import { assert } from 'chai';

import * as RA from '../src';

describe('allEqualTo', function () {
  context('given all items are equal', function () {
    specify('returns true', function () {
      assert.isTrue(RA.allEqualTo(4, [4, 4, 4, 4]));
    });
  });

  context('given all items are deeply equal', function () {
    specify('should return true', function () {
      assert.isTrue(
        RA.allEqualTo({ key: 'foo' }, [{ key: 'foo' }, { key: 'foo' }])
      );
    });
  });

  context('given items are not equal', function () {
    specify('should return false', function () {
      assert.isFalse(RA.allEqualTo(1, [1, 1, 2, 1, 1]));
    });
  });

  context('given items have different type', function () {
    specify('should return false', function () {
      assert.isFalse(RA.allEqualTo(1, [1, 1, '1', 1]));
    });
  });

  context('given items are reference to function', function () {
    specify('should return true', function () {
      const f = () => {};
      assert.isTrue(RA.allEqualTo(f, [f, f, f]));
    });
  });

  context(
    'given items are same functions without the same reference',
    function () {
      specify('should return false', function () {
        const getF = () => () => {};
        assert.isFalse(RA.allEqualTo(getF(), [getF(), getF(), getF()]));
      });
    }
  );

  context('given empty list provided', function () {
    specify('should return true', function () {
      assert.isTrue(RA.allEqualTo(1, []));
    });
  });

  it('should curry', function () {
    assert.isTrue(RA.allEqualTo(1, [1, 1]));
    assert.isTrue(RA.allEqualTo(1)([1, 1]));
  });
});
