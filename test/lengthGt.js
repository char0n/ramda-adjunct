import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('lengthGt', function () {
  context(
    'given the length of a list is greater than the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthGt(3, [1, 2, 3, 4]));
        assert.isFalse(RA.lengthGt(3, [1, 2, 3]));
        assert.isFalse(RA.lengthGt(0, []));
      });
    }
  );

  context(
    'given the length of a string is greater than the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthGt(3, 'abcd'));
        assert.isFalse(RA.lengthGt(3, 'abc'));
        assert.isFalse(RA.lengthGt(0, ''));
      });
    }
  );

  context("given a value doesn't have a length property", function () {
    specify('should return false', function () {
      assert.isFalse(RA.lengthGt(1, NaN));
      assert.isFalse(RA.lengthGt(1, undefined));
      assert.isFalse(RA.lengthGt(1, null));
      assert.isFalse(RA.lengthGt(1, {}));
      assert.isFalse(RA.lengthGt(1, true));
      assert.isFalse(RA.lengthGt(1, false));
      assert.isFalse(RA.lengthGt(1, 5));
    });
  });

  it('should be curried', function () {
    assert.isTrue(RA.lengthGt(1, [1, 2]));
    assert.isTrue(RA.lengthGt(1)([1, 2]));
  });
});
