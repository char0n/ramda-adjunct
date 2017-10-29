import * as R from 'ramda';

import eq from './shared/eq';
import RA from '../src/index';


describe('curryRightN', function() {
  const source = (a, b, c, d) => {
    void d;
    return a * b * c;
  };

  it('accepts an arity', function() {
    const curried = RA.curryRightN(3, source);
    eq(curried(1)(2)(3), 6);
    eq(curried(1, 2)(3), 6);
    eq(curried(1)(2, 3), 6);
    eq(curried(1, 2, 3), 6);
  });

  it('can be partially applied', function() {
    const curryRight3 = RA.curryRightN(3);
    const curried = curryRight3(source);
    eq(curried.length, 3);
    eq(curried(1)(2)(3), 6);
    eq(curried(1, 2)(3), 6);
    eq(curried(1)(2, 3), 6);
    eq(curried(1, 2, 3), 6);
  });

  it('preserves context', function() {
    const ctx = { x: 10 };
    const f = function(a, b) { return a + (b * this.x) };
    const g = RA.curryRightN(2, f);

    eq(g.call(ctx, 2, 4), 24);
    eq(g.call(ctx, 2).call(ctx, 4), 24);
  });

  it('supports R.__ placeholder', function() {
    const f = function(...args) { return args };
    const g = RA.curryRightN(3, f);
    const _ = R.__;

    eq(g(1)(2)(3), [3, 2, 1]);
    eq(g(1)(2, 3), [3, 2, 1]);
    eq(g(1, 2)(3), [3, 2, 1]);
    eq(g(1, 2, 3), [3, 2, 1]);

    eq(g(_, 2, 3)(1), [3, 2, 1]);
    eq(g(1, _, 3)(2), [3, 2, 1]);
    eq(g(1, 2, _)(3), [3, 2, 1]);

    eq(g(1, _, _)(2)(3), [3, 2, 1]);
    eq(g(_, 2, _)(1)(3), [3, 2, 1]);
    eq(g(_, _, 3)(1)(2), [3, 2, 1]);

    eq(g(1, _, _)(2, 3), [3, 2, 1]);
    eq(g(_, 2, _)(1, 3), [3, 2, 1]);
    eq(g(_, _, 3)(1, 2), [3, 2, 1]);

    eq(g(1, _, _)(_, 3)(2), [3, 2, 1]);
    eq(g(_, 2, _)(_, 3)(1), [3, 2, 1]);
    eq(g(_, _, 3)(_, 2)(1), [3, 2, 1]);

    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [3, 2, 1]);
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [3, 2, 1]);
  });

  it('supports @@functional/placeholder', function() {
    const f = function() { return Array.prototype.slice.call(arguments) };
    const g = RA.curryRightN(3, f);
    const _ = { '@@functional/placeholder': true, x: Math.random() };

    eq(g(1)(2)(3), [3, 2, 1]);
    eq(g(1)(2, 3), [3, 2, 1]);
    eq(g(1, 2)(3), [3, 2, 1]);
    eq(g(1, 2, 3), [3, 2, 1]);

    eq(g(_, 2, 3)(1), [3, 2, 1]);
    eq(g(1, _, 3)(2), [3, 2, 1]);
    eq(g(1, 2, _)(3), [3, 2, 1]);

    eq(g(1, _, _)(2)(3), [3, 2, 1]);
    eq(g(_, 2, _)(1)(3), [3, 2, 1]);
    eq(g(_, _, 3)(1)(2), [3, 2, 1]);

    eq(g(1, _, _)(2, 3), [3, 2, 1]);
    eq(g(_, 2, _)(1, 3), [3, 2, 1]);
    eq(g(_, _, 3)(1, 2), [3, 2, 1]);

    eq(g(1, _, _)(_, 3)(2), [3, 2, 1]);
    eq(g(_, 2, _)(_, 3)(1), [3, 2, 1]);
    eq(g(_, _, 3)(_, 2)(1), [3, 2, 1]);

    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [3, 2, 1]);
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [3, 2, 1]);
  });

  it('forwards extra arguments', function() {
    const f = function() { return Array.prototype.slice.call(arguments) };
    const g = RA.curryRightN(3, f);

    eq(g(1, 2, 3), [3, 2, 1]);
    eq(g(1, 2, 3, 4), [4, 3, 2, 1]);
    eq(g(1, 2)(3, 4), [4, 3, 2, 1]);
    eq(g(1)(2, 3, 4), [4, 3, 2, 1]);
    eq(g(1)(2)(3, 4), [4, 3, 2, 1]);
  });
});
