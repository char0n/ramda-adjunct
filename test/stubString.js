import { assert } from 'chai';

import * as RA from '../src';

describe('stubString', function() {
  it("tests `function` that returns `'''`", function() {
    assert.strictEqual(RA.stubString(), '');
    assert.strictEqual(RA.stubString([1]), '');
    assert.strictEqual(RA.stubString(new Array()), '');
    assert.strictEqual(RA.stubString(1, 2, 3), '');
  });

  context('when called', function() {
    specify('should always return empty string', function() {
      const ret1 = RA.stubString();
      const ret2 = RA.stubString();
      assert.strictEqual(ret1, ret2);
    });
  });
});
