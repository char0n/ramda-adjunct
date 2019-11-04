import { assert } from 'chai';

import * as RA from '../src';

describe('hasPath', function() {
  it('should work on paths in objects', function() {
    assert.isTrue(RA.hasPath(['a', 'b'], { a: { b: 1 } }));
    assert.isFalse(RA.hasPath(['a', 'b', 'c'], { a: { b: 1 } }));
    assert.isFalse(RA.hasPath(['a', 'b'], { a: {} }));
  });

  it('should work on arrays', function() {
    assert.isTrue(RA.hasPath([0], [1, 2]));
    assert.isFalse(RA.hasPath([2], [1, 2]));

    assert.isTrue(RA.hasPath(['0'], [1, 2]));
    assert.isFalse(RA.hasPath(['2'], [1, 2]));
  });

  it('should return false for empty paths', function() {
    assert.isFalse(RA.hasPath([], { a: {} }));
  });

  it('should return false on non-objects', function() {
    assert.isFalse(RA.hasPath(['a', 'b'], undefined));
    assert.isFalse(RA.hasPath(['a', 'b'], null));
  });

  it('should curry', function() {
    assert.isTrue(RA.hasPath(['a', 'b'])({ a: { b: 1 } }));
  });
});
