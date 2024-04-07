import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isNilOrEmpty', function () {
  it('should test value for `null` or `undefined`', function () {
    assert.isTrue(RA.isNilOrEmpty(void 0));
    assert.isTrue(RA.isNilOrEmpty(null));
    assert.isTrue(RA.isNilOrEmpty([]));
    assert.isTrue(RA.isNilOrEmpty({}));
    assert.isFalse(RA.isNilOrEmpty(0));
    assert.isTrue(RA.isNilOrEmpty(''));
  });

  context('given null', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNilOrEmpty(null));
    });
  });

  context('given undefined', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNilOrEmpty(undefined));
    });
  });

  context('given empty string', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNilOrEmpty(''));
    });
  });

  context('given string with space character', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNilOrEmpty(' '));
    });
  });

  context('given empty array', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNilOrEmpty([]));
    });

    context('with another empty array inside it', function () {
      specify('should return false', function () {
        assert.isFalse(RA.isNilOrEmpty([[]]));
      });
    });
  });

  context('given empty object literal', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNilOrEmpty({}));
    });
  });

  context('given empty object', function () {
    context('and the empty object was created with Object.create', function () {
      specify('should return true', function () {
        assert.isTrue(RA.isNilOrEmpty(Object.create({})));
        assert.isTrue(RA.isNilOrEmpty(Object.create(null)));
      });
    });
  });

  context('given arguments object', function () {
    context('and the arguments object is empty', function () {
      specify('should return true', function () {
        assert.isTrue(
          RA.isNilOrEmpty(
            (function () {
              return arguments;
            })()
          )
        );
      });
    });

    context('and the arguments object has one or more property', function () {
      assert.isFalse(
        RA.isNilOrEmpty(
          (function () {
            return arguments;
          })(0)
        )
      );
    });
  });

  it('should return false for every other value', function () {
    assert.isFalse(RA.isNilOrEmpty(0));
    assert.isFalse(RA.isNilOrEmpty(NaN));
    assert.isFalse(RA.isNilOrEmpty(['']));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNilOrEmpty = RA.isNilOrEmpty(R.__);

    assert.isTrue(isNilOrEmpty({}));
  });
});
