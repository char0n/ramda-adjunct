import { assert } from 'chai';

import * as RA from '../src';

describe('makeFlat', function () {
  it('should flatten an array of n levels', function () {
    assert.sameOrderedMembers(RA.makeFlat(true)([[1], [2]]), [1, 2]);
    assert.sameOrderedMembers(RA.makeFlat(true)([[[1], [2]]]), [1, 2]);
    assert.sameOrderedMembers(RA.makeFlat(true)([[[[1], [2]]]]), [1, 2]);
    assert.sameOrderedMembers(RA.makeFlat(true)(RA.list([[[[1], [2]]]])), [
      1,
      2,
    ]);
  });
  it('should flatten just one level', function () {
    assert.sameOrderedMembers(RA.makeFlat(false)([[1], [2]]), [1, 2]);
    assert.deepEqual(RA.makeFlat(false)([[[1], [2]]]), [[1], [2]]);
    assert.deepEqual(RA.makeFlat(false)([[[[1], [2]]]]), [[[1], [2]]]);
    assert.deepEqual(RA.makeFlat(false)([[[[[1]], [2]]]]), [[[[1]], [2]]]);
    assert.deepEqual(RA.makeFlat(false)(RA.list([[[[[1]], [2]]]])), [
      [[[[1]], [2]]],
    ]);
  });
});
