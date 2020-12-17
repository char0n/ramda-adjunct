import { assert } from 'chai';

import * as RA from '../../src';
import makeFlat from '../../src/internal/makeFlat';

describe('makeFlat', function () {
  it('should flatten an ar of n levels', function () {
    assert.sameOrderedMembers(makeFlat(true)([[1], [2]]), [1, 2]);
    assert.sameOrderedMembers(makeFlat(true)([[[1], [2]]]), [1, 2]);
    assert.sameOrderedMembers(makeFlat(true)([[[[1], [2]]]]), [1, 2]);
    assert.sameOrderedMembers(makeFlat(true)(RA.list([[[[1], [2]]]])), [1, 2]);
  });
  it('should flatten just one level', function () {
    assert.sameOrderedMembers(makeFlat(false)([[1], [2]]), [1, 2]);
    assert.deepEqual(makeFlat(false)([[[1], [2]]]), [[1], [2]]);
    assert.deepEqual(makeFlat(false)([[[[1], [2]]]]), [[[1], [2]]]);
    assert.deepEqual(makeFlat(false)([[[[[1]], [2]]]]), [[[[1]], [2]]]);
    assert.deepEqual(makeFlat(false)(RA.list([[[[[1]], [2]]]])), [
      [[[[1]], [2]]],
    ]);
  });
});
