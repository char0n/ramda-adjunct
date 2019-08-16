import { assert } from 'chai';

import * as RA from '../src';

describe('isSparseArray', function() {
  context('given no arguments', function() {
    specify('should return reference to itself', function() {
      assert.strictEqual(RA.isSparseArray(), RA.isSparseArray);
    });
  });

  it('should return false for an empty array', function() {
    assert.isFalse(RA.isSparseArray([]));
  });

  it('should return false for regular arrays', function() {
    assert.isFalse(RA.isSparseArray([1, 2, 3]));
  });

  it('should return true for a sparse array', function() {
    // eslint-disable-next-line no-sparse-arrays
    assert.isTrue(RA.isSparseArray([1, 2, , 3]));
  });

  it('should return true for an array with the last element deleted', function() {
    const array = [1, 2, 3];
    delete array[2];

    assert.isTrue(RA.isSparseArray(array));
  });
});
