import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isNotNilOrEmpty', function () {
  it('should test value for `null` or `undefined`', function () {
    assert.isFalse(RA.isNotNilOrEmpty(void 0));
    assert.isFalse(RA.isNotNilOrEmpty(null));
    assert.isFalse(RA.isNotNilOrEmpty([]));
    assert.isFalse(RA.isNotNilOrEmpty({}));
    assert.isTrue(RA.isNotNilOrEmpty(0));
    assert.isFalse(RA.isNotNilOrEmpty(''));
  });

  context('given null', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotNilOrEmpty(null));
    });
  });

  context('given undefined', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotNilOrEmpty(undefined));
    });
  });

  context('given empty string', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotNilOrEmpty(''));
    });
  });

  context('given string with space character', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotNilOrEmpty(' '));
    });
  });

  context('given empty array', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotNilOrEmpty([]));
    });

    context('with another empty array inside it', function () {
      specify('should return true', function () {
        assert.isTrue(RA.isNotNilOrEmpty([[]]));
      });
    });
  });

  context('given empty object literal', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotNilOrEmpty({}));
    });
  });

  context('given empty object', function () {
    context('and the empty object was created with Object.create', function () {
      specify('should return false', function () {
        assert.isFalse(RA.isNotNilOrEmpty(Object.create({})));
        assert.isFalse(RA.isNotNilOrEmpty(Object.create(null)));
      });
    });
  });

  context('given arguments object', function () {
    context('and the arguments object is empty', function () {
      specify('should return false', function () {
        assert.isFalse(
          RA.isNotNilOrEmpty(
            (function () {
              return arguments;
            })()
          )
        );
      });
    });

    context('and the arguments object has one or more property', function () {
      assert.isTrue(
        RA.isNotNilOrEmpty(
          (function () {
            return arguments;
          })(0)
        )
      );
    });
  });

  it('should return true for every other value', function () {
    assert.isTrue(RA.isNotNilOrEmpty(0));
    assert.isTrue(RA.isNotNilOrEmpty(NaN));
    assert.isTrue(RA.isNotNilOrEmpty(['']));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotNilOrEmpty = RA.isNotNilOrEmpty(R.__);

    assert.isFalse(isNotNilOrEmpty({}));
  });
});
