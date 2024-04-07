import * as R from 'ramda';
import jsv from 'jsverify';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('curryRight', function () {
  it('should curry a single value', function () {
    const f = RA.curryRight(function (a, b, c, d) {
      return (a + b * c) / d;
    }); // f(2, 6, 3, 10) == 2
    const g = f(10);
    assert.strictEqual(g(3, 6, 2), 2);
  });

  it('should curry multiple values', function () {
    // f(2, 6, 3, 10) == 2
    const f = RA.curryRight(function (a, b, c, d) {
      return (a + b * c) / d;
    });
    const g = f(10, 3);
    assert.strictEqual(g(6, 2), 2);
    const h = f(10, 3, 6);
    assert.strictEqual(h(2), 2);
  });

  it('should allow further currying of a curried function', function () {
    // f(2, 6, 3, 10) == 2
    const f = RA.curryRight(function (a, b, c, d) {
      return (a + b * c) / d;
    });
    const g = f(10);
    assert.strictEqual(g(3, 6, 2), 2);
    const h = g(3);
    assert.strictEqual(h(6, 2), 2);
    assert.strictEqual(g(3, 6)(2), 2);
  });

  it('should properly report the length of the curried function', function () {
    const f = RA.curryRight(function (a, b, c, d) {
      return (a + b * c) / d;
    });
    assert.strictEqual(f.length, 4);
    const g = f(10);
    assert.strictEqual(g.length, 3);
    const h = g(3);
    assert.strictEqual(h.length, 2);
    assert.strictEqual(g(3, 6).length, 1);
  });

  it('should preserve context', function () {
    const ctx = { x: 10 };
    const f = function (a, b) {
      return a + b * this.x;
    };
    const g = RA.curryRight(f);

    assert.strictEqual(g.call(ctx, 2, 4), 24);
    assert.strictEqual(g.call(ctx, 2).call(ctx, 4), 24);
  });

  it('should support R.__ placeholder', function () {
    const f = function (a, b, c) {
      return [a, b, c];
    };
    const g = RA.curryRight(f);
    const _ = R.__;

    assert.sameOrderedMembers(g(1)(2)(3), [3, 2, 1]);
    assert.sameOrderedMembers(g(1)(2, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2)(3), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2, 3), [3, 2, 1]);

    assert.sameOrderedMembers(g(_, 2, 3)(1), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, _, 3)(2), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2, _)(3), [3, 2, 1]);

    assert.sameOrderedMembers(g(1, _, _)(2)(3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, 2, _)(1)(3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, _, 3)(1)(2), [3, 2, 1]);

    assert.sameOrderedMembers(g(1, _, _)(2, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, 2, _)(1, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, _, 3)(1, 2), [3, 2, 1]);

    assert.sameOrderedMembers(g(1, _, _)(_, 3)(2), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, 2, _)(_, 3)(1), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, _, 3)(_, 2)(1), [3, 2, 1]);

    assert.sameOrderedMembers(g(_, _, _)(_, _)(_)(1, 2, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [3, 2, 1]);
  });

  it('should support @@functional/placeholder', function () {
    const f = function (a, b, c) {
      return [a, b, c];
    };
    const g = RA.curryRight(f);
    const _ = { '@@functional/placeholder': true, x: Math.random() };

    assert.sameOrderedMembers(g(1)(2)(3), [3, 2, 1]);
    assert.sameOrderedMembers(g(1)(2, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2)(3), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2, 3), [3, 2, 1]);

    assert.sameOrderedMembers(g(_, 2, 3)(1), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, _, 3)(2), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2, _)(3), [3, 2, 1]);

    assert.sameOrderedMembers(g(1, _, _)(2)(3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, 2, _)(1)(3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, _, 3)(1)(2), [3, 2, 1]);

    assert.sameOrderedMembers(g(1, _, _)(2, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, 2, _)(1, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, _, 3)(1, 2), [3, 2, 1]);

    assert.sameOrderedMembers(g(1, _, _)(_, 3)(2), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, 2, _)(_, 3)(1), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, _, 3)(_, 2)(1), [3, 2, 1]);

    assert.sameOrderedMembers(g(_, _, _)(_, _)(_)(1, 2, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [3, 2, 1]);
  });

  it('should forward extra arguments', function () {
    const f = function (a, b, c) {
      void c;
      return Array.prototype.slice.call(arguments);
    };
    const g = RA.curryRight(f);

    assert.sameOrderedMembers(g(1, 2, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2, 3, 4), [4, 3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2)(3, 4), [4, 3, 2, 1]);
    assert.sameOrderedMembers(g(1)(2, 3, 4), [4, 3, 2, 1]);
    assert.sameOrderedMembers(g(1)(2)(3, 4), [4, 3, 2, 1]);
  });
});

/* eslint-disable max-len */
describe('curryRight properties', function () {
  jsv.property(
    'should curry multiple values',
    jsv.integer,
    jsv.integer,
    jsv.integer,
    (a, b, c) => {
      const f = (_a, _b, _c) => _a + _b + _c;
      const g = RA.curryRight(f);

      return R.all(R.equals(f(a, b, c)), [
        g(a, b, c),
        g(a)(b)(c),
        g(a)(b, c),
        g(a, b)(c),
        g(a, b, c),
      ]);
    }
  );

  jsv.property(
    'should curry with placeholder',
    jsv.integer,
    jsv.integer,
    jsv.integer,
    (a, b, c) => {
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
    }
  );
});
/* eslint-enable */
