import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('sliceTo', function () {
  it('should retrieves the proper sublist of a list', function () {
    const list = [8, 6, 7, 5, 3, 0, 9];
    assert.sameOrderedMembers(RA.sliceTo(3, list), [8, 6, 7]);
  });

  it('should handle array-like object', function () {
    const args = (function () {
      return arguments;
    })(1, 2, 3, 4, 5);
    assert.sameOrderedMembers(RA.sliceTo(2, args), [1, 2]);
  });

  it('should operate on strings', function () {
    assert.strictEqual(RA.sliceTo(0, 'abc'), '');
    assert.strictEqual(RA.sliceTo(1, 'abc'), 'a');
    assert.strictEqual(RA.sliceTo(2, 'abc'), 'ab');
    assert.strictEqual(RA.sliceTo(3, 'abc'), 'abc');
    assert.strictEqual(RA.sliceTo(4, 'abc'), 'abc');
    assert.strictEqual(RA.sliceTo(-4, 'abc'), '');
    assert.strictEqual(RA.sliceTo(-3, 'abc'), '');
    assert.strictEqual(RA.sliceTo(-2, 'abc'), 'a');
    assert.strictEqual(RA.sliceTo(-1, 'abc'), 'ab');
  });

  it('should be curried', function () {
    assert.strictEqual(RA.sliceTo(2, 'abc'), 'ab');
    assert.strictEqual(RA.sliceTo(2)('abc'), 'ab');
  });
});
