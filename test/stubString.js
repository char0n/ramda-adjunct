import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('stubString', function () {
  context('given any input arguments', function () {
    specify('should return new empty string', function () {
      assert.strictEqual(RA.stubString(), '');
      assert.strictEqual(RA.stubString([1]), '');
      assert.strictEqual(RA.stubString(new Array()), '');
      assert.strictEqual(RA.stubString(1, 2, 3), '');
    });
  });

  it('should always return an empty string', function () {
    const ret1 = RA.stubString();
    const ret2 = RA.stubString();
    assert.strictEqual(ret1, ret2);
  });
});
