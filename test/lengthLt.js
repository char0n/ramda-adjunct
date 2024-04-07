import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('lengthLt', function () {
  context(
    'given the length of a list is less than the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthLt(3, [1, 2]));
        assert.isFalse(RA.lengthLt(3, [1, 2, 3]));
        assert.isFalse(RA.lengthLt(0, []));
      });
    }
  );

  context(
    'given the length of a string is less than the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthLt(3, 'ab'));
        assert.isFalse(RA.lengthLt(3, 'abc'));
        assert.isFalse(RA.lengthLt(0, ''));
      });
    }
  );

  context("given a value doesn't have a length property", function () {
    specify('should return false', function () {
      assert.isFalse(RA.lengthLt(1, NaN));
      assert.isFalse(RA.lengthLt(1, undefined));
      assert.isFalse(RA.lengthLt(1, null));
      assert.isFalse(RA.lengthLt(1, {}));
      assert.isFalse(RA.lengthLt(1, true));
      assert.isFalse(RA.lengthLt(1, false));
      assert.isFalse(RA.lengthLt(1, 5));
    });
  });

  it('should be curried', function () {
    assert.isTrue(RA.lengthLt(2, [1]));
    assert.isTrue(RA.lengthLt(2)([1]));
  });
});
