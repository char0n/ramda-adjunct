import { assert } from 'chai';

import * as RA from '../src';

describe('stubArray', function() {
  it('tests `function` that returns empty array', function() {
    assert.sameOrderedMembers(RA.stubArray(), []);
    assert.sameOrderedMembers(RA.stubArray([1]), []);
    assert.sameOrderedMembers(RA.stubArray(new Array()), []);
    assert.sameOrderedMembers(RA.stubArray(1, 2, 3), []);
  });

  context('when called', function() {
    specify('should always return new empty array', function() {
      const ret1 = RA.stubArray();
      const ret2 = RA.stubArray();
      assert.notStrictEqual(ret1, ret2);
    });
  });
});
