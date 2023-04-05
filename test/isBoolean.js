import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('isBoolean', function () {
  context('given boolean value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isBoolean(true));
      assert.isTrue(RA.isBoolean(false));
      assert.isTrue(RA.isBoolean(Object(true)));
      assert.isTrue(RA.isBoolean(Object(false)));
      assert.isTrue(RA.isBoolean(new Boolean(true)));
      assert.isTrue(RA.isBoolean(new Boolean(false)));
    });
  });

  context('given non-boolean value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isBoolean([1, 2, 3]));
      assert.isFalse(RA.isBoolean(new Date()));
      assert.isFalse(RA.isBoolean(new Error()));
      assert.isFalse(RA.isBoolean(R));
      assert.isFalse(RA.isBoolean(RA.isBoolean));
      assert.isFalse(RA.isBoolean({ a: 1 }));
      assert.isFalse(RA.isBoolean(3));
      assert.isFalse(RA.isBoolean(/regex/));
      assert.isFalse(RA.isBoolean('abc'));
      assert.isFalse(RA.isBoolean(Symbol));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isBoolean = RA.isBoolean(R.__);

    assert.isTrue(isBoolean(true));
  });
});
