import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('lengthLte', function () {
  context(
    'given the length of a list is less than or equal to the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthLte(3, [1, 2]));
        assert.isTrue(RA.lengthLte(3, [1, 2, 3]));
        assert.isFalse(RA.lengthLte(3, [1, 2, 3, 4]));
        assert.isTrue(RA.lengthLte(0, []));
      });
    }
  );

  context(
    'given the length of a string is less than or equal to the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthLte(3, 'ab'));
        assert.isTrue(RA.lengthLte(3, 'abc'));
        assert.isFalse(RA.lengthLte(3, 'abcd'));
        assert.isTrue(RA.lengthLte(0, ''));
      });
    }
  );

  context("given a value doesn't have a length property", function () {
    specify('should return false', function () {
      assert.isFalse(RA.lengthLte(1, NaN));
      assert.isFalse(RA.lengthLte(1, undefined));
      assert.isFalse(RA.lengthLte(1, null));
      assert.isFalse(RA.lengthLte(1, {}));
      assert.isFalse(RA.lengthLte(1, true));
      assert.isFalse(RA.lengthLte(1, false));
      assert.isFalse(RA.lengthLte(1, 5));
    });
  });

  it('should be curried', function () {
    assert.isTrue(RA.lengthLte(1, [1]));
    assert.isTrue(RA.lengthLte(1)([1]));
  });
});
