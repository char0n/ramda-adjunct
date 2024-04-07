import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('lengthEq', function () {
  context(
    'given the length of a list is equal to the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthEq(3, [1, 2, 3]));
        assert.isFalse(RA.lengthEq(3, [1, 2, 3, 4]));
        assert.isFalse(RA.lengthEq(3, [1, 2]));
        assert.isTrue(RA.lengthEq(0, []));
      });
    }
  );

  context(
    'given the length of a string is equal to the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthEq(3, 'abc'));
        assert.isFalse(RA.lengthEq(3, 'abcd'));
        assert.isFalse(RA.lengthEq(3, 'ab'));
        assert.isTrue(RA.lengthEq(0, ''));
      });
    }
  );

  context("given a value doesn't have a length property", function () {
    specify('should return true', function () {
      assert.isFalse(RA.lengthEq(1, NaN));
      assert.isFalse(RA.lengthEq(1, undefined));
      assert.isFalse(RA.lengthEq(1, null));
      assert.isFalse(RA.lengthEq(1, {}));
      assert.isFalse(RA.lengthEq(1, true));
      assert.isFalse(RA.lengthEq(1, false));
      assert.isFalse(RA.lengthEq(1, 5));
    });
  });

  it('should be curried', function () {
    assert.isTrue(RA.lengthEq(2, [1, 2]));
    assert.isTrue(RA.lengthEq(2)([1, 2]));
  });
});
