import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('isSparseArray', function () {
  it('should test value for a sparse array', function () {
    assert.isTrue(RA.isSparseArray(new Array(3)));
    assert.isTrue(RA.isSparseArray([1, , 3])); // eslint-disable-line

    assert.isFalse(RA.isSparseArray([1, 2, 3]));
    assert.isFalse(RA.isSparseArray(new Array()));
    assert.isFalse(RA.isSparseArray(new Array(0)));

    assert.isFalse(RA.isSparseArray(new Date()), false);
    assert.isFalse(RA.isSparseArray(new Error()), false);
    assert.isFalse(RA.isSparseArray(R), false);
    assert.isFalse(RA.isSparseArray(RA.isSparseArray), false);
    assert.isFalse(RA.isSparseArray({ a: 1 }), false);
    assert.isFalse(RA.isSparseArray(3), false);
    assert.isFalse(RA.isSparseArray(/regex/), false);
    assert.isFalse(RA.isSparseArray('abc'), false);
    assert.isFalse(RA.isSparseArray(Symbol), false);
  });

  context('given array with deleted slot', function () {
    specify('should identify as sparse array', function () {
      const list = [1, 2, 3];
      delete list[1];

      assert.isTrue(RA.isSparseArray(list));
    });
  });

  context('given array of undefined values', function () {
    specify('should not identify as sparse array', function () {
      assert.isFalse(RA.isSparseArray([undefined, undefined, undefined]));
    });
  });

  context('given array of null value', function () {
    specify('should not identify as sparse array', function () {
      assert.isFalse(RA.isSparseArray([null, null, null]));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isSparseArray = RA.isSparseArray(R.__);

    assert.isFalse(isSparseArray([1, 2, 3]));
  });
});
