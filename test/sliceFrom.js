import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('sliceFrom', function () {
  it('should retrieve the proper sublist of a list', function () {
    const list = [8, 6, 7, 5, 3, 0, 9];
    assert.sameOrderedMembers(RA.sliceFrom(2, list), [7, 5, 3, 0, 9]);
  });

  it('should handle array-like object', function () {
    const args = (function () {
      return arguments;
    })(1, 2, 3, 4, 5);
    assert.sameOrderedMembers(RA.sliceFrom(1, args), [2, 3, 4, 5]);
  });

  it('should operate on strings', function () {
    assert.strictEqual(RA.sliceFrom(0, 'abc'), 'abc');
    assert.strictEqual(RA.sliceFrom(1, 'abc'), 'bc');
    assert.strictEqual(RA.sliceFrom(2, 'abc'), 'c');
    assert.strictEqual(RA.sliceFrom(3, 'abc'), '');
    assert.strictEqual(RA.sliceFrom(4, 'abc'), '');
    assert.strictEqual(RA.sliceFrom(-4, 'abc'), 'abc');
    assert.strictEqual(RA.sliceFrom(-3, 'abc'), 'abc');
    assert.strictEqual(RA.sliceFrom(-2, 'abc'), 'bc');
    assert.strictEqual(RA.sliceFrom(-1, 'abc'), 'c');
  });

  it('should be curried', function () {
    assert.strictEqual(RA.sliceFrom(1, 'abc'), 'bc');
    assert.strictEqual(RA.sliceFrom(1)('abc'), 'bc');
  });
});
