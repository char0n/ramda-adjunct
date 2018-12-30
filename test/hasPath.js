import * as RA from '../src';
import eq from './shared/eq';

describe('hasPath', function() {
  it('should work on paths in objects', function() {
    eq(RA.hasPath(['a', 'b'], { a: { b: 1 } }), true);
    eq(RA.hasPath(['a', 'b', 'c'], { a: { b: 1 } }), false);
    eq(RA.hasPath(['a', 'b'], { a: {} }), false);
  });

  it('should work on arrays', function() {
    eq(RA.hasPath([0], [1, 2]), true);
    eq(RA.hasPath([2], [1, 2]), false);

    eq(RA.hasPath(['0'], [1, 2]), true);
    eq(RA.hasPath(['2'], [1, 2]), false);
  });

  it('should return false for empty paths', function() {
    eq(RA.hasPath([], { a: {} }), false);
  });

  it('should return false on non-objects', function() {
    eq(RA.hasPath(['a', 'b'], undefined), false);
    eq(RA.hasPath(['a', 'b'], null), false);
  });

  it('should curry', function() {
    eq(RA.hasPath(['a', 'b'])({ a: { b: 1 } }), true);
  });
});
