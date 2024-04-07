import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('lengthNotEq', function () {
  context(
    'given the length of a list is not equal to the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthNotEq(3, [1, 2, 3, 4]));
        assert.isTrue(RA.lengthNotEq(3, [1, 2]));
        assert.isFalse(RA.lengthNotEq(3, [1, 2, 3]));
        assert.isFalse(RA.lengthNotEq(0, []));
      });
    }
  );

  context(
    'given the length of a string is not equal to the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthNotEq(3, 'abcd'));
        assert.isTrue(RA.lengthNotEq(3, 'ab'));
        assert.isFalse(RA.lengthNotEq(3, 'abc'));
        assert.isFalse(RA.lengthNotEq(0, ''));
      });
    }
  );

  context("given a value doesn't have a length property", function () {
    specify('should return true', function () {
      assert.isTrue(RA.lengthNotEq(1, NaN));
      assert.isTrue(RA.lengthNotEq(1, undefined));
      assert.isTrue(RA.lengthNotEq(1, null));
      assert.isTrue(RA.lengthNotEq(1, {}));
      assert.isTrue(RA.lengthNotEq(1, true));
      assert.isTrue(RA.lengthNotEq(1, false));
      assert.isTrue(RA.lengthNotEq(1, 5));
    });
  });

  it('should be curried', function () {
    assert.isTrue(RA.lengthNotEq(1, [1, 2]));
    assert.isTrue(RA.lengthNotEq(1)([1, 2]));
  });
});
