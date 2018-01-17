import * as RA from '../src/index';
import eq from './shared/eq';


describe('hasPath', function () {
  it('tests for paths in objects', function () {
    eq(RA.hasPath(['a', 'b'], { a: { b: 1 } }), true);
    eq(RA.hasPath(['a', 'b', 'c'], { a: { b: 1 } }), false);
    eq(RA.hasPath(['a', 'b'], { a: { } }), false);
  });

  it('tests for paths in arrays', function () {
    eq(RA.hasPath([0], [1, 2]), true);
    eq(RA.hasPath([2], [1, 2]), false);

    eq(RA.hasPath(['0'], [1, 2]), true);
    eq(RA.hasPath(['2'], [1, 2]), false);
  });

  it('tests empty path', function () {
    eq(RA.hasPath([], { a: { } }), false);
  });

  it('tests paths on non-objects', function () {
    eq(RA.hasPath(['a', 'b'], undefined), false);
    eq(RA.hasPath(['a', 'b'], null), false);
  });

  it('tests currying', function () {
    eq(RA.hasPath(['a', 'b'])({ a: { b: 1 } }), true);
  });
});
