import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('stubArray', function () {
  context('given any input arguments', function () {
    specify('should return an empty array', function () {
      assert.sameOrderedMembers(RA.stubArray(), []);
      assert.sameOrderedMembers(RA.stubArray([1]), []);
      assert.sameOrderedMembers(RA.stubArray(new Array()), []);
      assert.sameOrderedMembers(RA.stubArray(1, 2, 3), []);
    });
  });

  it('should always return new empty array when called', function () {
    const ret1 = RA.stubArray();
    const ret2 = RA.stubArray();
    assert.notStrictEqual(ret1, ret2);
  });
});
