import { assert } from 'chai';

import * as RA from '../src';

describe('sliceTo', function() {
  it('retrieves the proper sublist of a list', function() {
    const list = [8, 6, 7, 5, 3, 0, 9];
    assert.sameOrderedMembers(RA.sliceTo(3, list), [8, 6, 7]);
  });

  it('handles array-like object', function() {
    const args = (function() {
      return arguments;
    })(1, 2, 3, 4, 5);
    assert.sameOrderedMembers(RA.sliceTo(2, args), [1, 2]);
  });

  it('can operate on strings', function() {
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
});
