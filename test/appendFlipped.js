import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('appendFlipped', function () {
  it('should add the element to the end of the list', function () {
    assert.sameOrderedMembers(RA.appendFlipped(['x', 'y'], 'z'), [
      'x',
      'y',
      'z',
    ]);
    assert.sameDeepOrderedMembers(RA.appendFlipped(['x', 'y'], ['a', 'z']), [
      'x',
      'y',
      ['a', 'z'],
    ]);
  });

  it('should work on empty list', function () {
    assert.sameOrderedMembers(RA.appendFlipped([], 1), [1]);
  });

  it('should support placeholder to specify "gaps"', function () {
    const appendFlipped = RA.appendFlipped(R.__);

    assert.sameOrderedMembers(appendFlipped([], 'test'), ['test']);
  });
});
