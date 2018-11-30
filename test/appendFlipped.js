import * as R from 'ramda';

import * as RA from '../src';
import eq from './shared/eq';

describe('appendFlipped', function() {
  it('should add the element to the end of the list', function() {
    eq(RA.appendFlipped(['x', 'y'], 'z'), ['x', 'y', 'z']);
    eq(RA.appendFlipped(['x', 'y'], ['a', 'z']), ['x', 'y', ['a', 'z']]);
  });

  it('should work on empty list', function() {
    eq(RA.appendFlipped([], 1), [1]);
  });

  it('should support placeholder to specify "gaps"', function() {
    const appendFlipped = RA.appendFlipped(R.__);

    eq(appendFlipped([], 'test'), ['test']);
  });
});
