import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('lengthGte', function () {
  context(
    'given the length of a list is greater than or equal to the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthGte(3, [1, 2, 3, 4]));
        assert.isTrue(RA.lengthGte(3, [1, 2, 3]));
        assert.isFalse(RA.lengthGte(3, [1, 2]));
        assert.isTrue(RA.lengthGte(0, []));
      });
    }
  );

  context(
    'given the length of a string is greater than or equal to the supplied length',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lengthGte(3, 'abcd'));
        assert.isTrue(RA.lengthGte(3, 'abc'));
        assert.isFalse(RA.lengthGte(3, 'ab'));
        assert.isTrue(RA.lengthGte(0, ''));
      });
    }
  );

  context("given a value doesn't have a length property", function () {
    specify('should return false', function () {
      assert.isFalse(RA.lengthGte(1, NaN));
      assert.isFalse(RA.lengthGte(1, undefined));
      assert.isFalse(RA.lengthGte(1, null));
      assert.isFalse(RA.lengthGte(1, {}));
      assert.isFalse(RA.lengthGte(1, true));
      assert.isFalse(RA.lengthGte(1, false));
      assert.isFalse(RA.lengthGte(1, 5));
    });
  });

  it('should be curried', function () {
    assert.isTrue(RA.lengthGte(1, [1]));
    assert.isTrue(RA.lengthGte(1)([1]));
  });
});
