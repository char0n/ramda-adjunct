import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isNotEmpty', function () {
  context('given null', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotEmpty(null));
    });
  });

  context('given undefined', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotEmpty(undefined));
    });
  });

  context('given string', function () {
    context('and the string is empty', function () {
      specify('should return false', function () {
        assert.isFalse(RA.isNotEmpty(''));
      });
    });

    context('and the string contains empty spaces', function () {
      specify('should return true', function () {
        assert.isTrue(RA.isNotEmpty(' '));
      });
    });
  });

  context('given array', function () {
    context('and the array is empty', function () {
      specify('should return false', function () {
        assert.isFalse(RA.isNotEmpty([]));
      });
    });

    context('and the array contains another empty array', function () {
      specify('should return true', function () {
        assert.isTrue(RA.isNotEmpty([[]]));
      });
    });
  });

  context('given object', function () {
    context('and the object is empty', function () {
      specify('should return false', function () {
        assert.isFalse(RA.isNotEmpty({}));
      });
    });

    context('and the object contains property', function () {
      specify('should return true', function () {
        assert.isTrue(RA.isNotEmpty({ x: 0 }));
      });
    });
  });

  context('given arguments object', function () {
    context('and arguments objects is empty', function () {
      specify('should return false', function () {
        assert.isFalse(
          RA.isNotEmpty(
            (function () {
              return arguments;
            })()
          )
        );
      });
    });

    context('and arguments object is not empty', function () {
      specify('should return true', function () {
        assert.isTrue(
          RA.isNotEmpty(
            (function () {
              return arguments;
            })(0)
          )
        );
      });
    });
  });

  context('given some non empty values', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotEmpty(0));
      assert.isTrue(RA.isNotEmpty(NaN));
      assert.isTrue(RA.isNotEmpty(['']));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotEmpty = RA.isNotEmpty(R.__);

    assert.isTrue(isNotEmpty(-1));
  });
});
