import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('isNotBoolean', function () {
  context('given non boolean value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotBoolean([1, 2, 3]));
      assert.isTrue(RA.isNotBoolean(new Date()));
      assert.isTrue(RA.isNotBoolean(new Error()));
      assert.isTrue(RA.isNotBoolean(R));
      assert.isTrue(RA.isNotBoolean(RA.isNotBoolean));
      assert.isTrue(RA.isNotBoolean({ a: 1 }));
      assert.isTrue(RA.isNotBoolean(3));
      assert.isTrue(RA.isNotBoolean(/regex/));
      assert.isTrue(RA.isNotBoolean('abc'));
      assert.isTrue(RA.isNotBoolean(Symbol));
    });
  });

  context('given boolean value', function () {
    context('and the boolean value is primitive', function () {
      specify('should return false', function () {
        assert.isFalse(RA.isNotBoolean(true));
        assert.isFalse(RA.isNotBoolean(false));
      });
    });

    context('and the boolean value is box wrapper', function () {
      specify('should return false', function () {
        assert.isFalse(RA.isNotBoolean(Object(true)));
        assert.isFalse(RA.isNotBoolean(Object(false)));
      });
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotBoolean = RA.isNotBoolean(R.__);

    assert.isTrue(isNotBoolean(-1));
  });
});
