import * as R from 'ramda';
import jsv from 'jsverify';

import eq from './shared/eq';
import RA from '../src/index';


describe('curryRight', function() {
  it('curries a single value', function () {
    const f = RA.curryRight(function (a, b, c, d) {
      return (a + (b * c)) / d;
    }); // f(2, 6, 3, 10) == 2
    const g = f(10);
    eq(g(3, 6, 2), 2);
  });

  it('curries multiple values', function() {
    // f(2, 6, 3, 10) == 2
    const f = RA.curryRight(function(a, b, c, d) { return (a + (b * c)) / d });
    const g = f(10, 3);
    eq(g(6, 2), 2);
    const h = f(10, 3, 6);
    eq(h(2), 2);
  });

  it('allows further currying of a curried function', function() {
    // f(2, 6, 3, 10) == 2
    const f = RA.curryRight(function(a, b, c, d) { return (a + (b * c)) / d });
    const g = f(10);
    eq(g(3, 6, 2), 2);
    const h = g(3);
    eq(h(6, 2), 2);
    eq(g(3, 6)(2), 2);
  });

  it('properly reports the length of the curried function', function() {
    const f = RA.curryRight(function(a, b, c, d) { return (a + (b * c)) / d });
    eq(f.length, 4);
    const g = f(10);
    eq(g.length, 3);
    const h = g(3);
    eq(h.length, 2);
    eq(g(3, 6).length, 1);
  });

  it('preserves context', function() {
    const ctx = { x: 10 };
    const f = function(a, b) { return a + (b * this.x) };
    const g = RA.curryRight(f);

    eq(g.call(ctx, 2, 4), 24);
    eq(g.call(ctx, 2).call(ctx, 4), 24);
  });


  it('supports R.__ placeholder', function() {
    const f = function(a, b, c) { return [a, b, c] };
    const g = RA.curryRight(f);
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
    const f = function(a, b, c) { return [a, b, c] };
    const g = RA.curryRight(f);
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
    const f = function(a, b, c) {
      void c;
      return Array.prototype.slice.call(arguments);
    };
    const g = RA.curryRight(f);

    eq(g(1, 2, 3), [3, 2, 1]);
    eq(g(1, 2, 3, 4), [4, 3, 2, 1]);
    eq(g(1, 2)(3, 4), [4, 3, 2, 1]);
    eq(g(1)(2, 3, 4), [4, 3, 2, 1]);
    eq(g(1)(2)(3, 4), [4, 3, 2, 1]);
  });
});

/* eslint-disable max-len */
describe('curryRight properties', function() {
  jsv.property('curries multiple values', jsv.integer, jsv.integer, jsv.integer, (a, b, c) => {
    const f = (_a, _b, _c) => _a + _b + _c;
    const g = RA.curryRight(f);

    return R.all(R.equals(f(a, b, c)), [
      g(a, b, c),
      g(a)(b)(c),
      g(a)(b, c),
      g(a, b)(c),
      g(a, b, c),
    ]);
  });

  jsv.property('curries with placeholder', jsv.integer, jsv.integer, jsv.integer, (a, b, c) => {
    const _ = { '@@functional/placeholder': true, x: Math.random() };
    const f = (_a, _b, _c) => _a + _b + _c;
    const g = RA.curryRight(f);

    return R.all(R.equals(f(a, b, c)), [
      g(_, _, c)(a, b),
      g(a, _, c)(b),
      g(_, b, c)(a),
      g(a, _, _)(_, c)(b),
      g(a, b, _)(c),
    ]);
  });
});
/* eslint-enable */
