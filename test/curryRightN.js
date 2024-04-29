import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('curryRightN', function () {
  const source = (a, b, c, d) => {
    void d;
    return a * b * c;
  };

  it('should accept an arity', function () {
    const curried = RA.curryRightN(3, source);
    assert.strictEqual(curried(1)(2)(3), 6);
    assert.strictEqual(curried(1, 2)(3), 6);
    assert.strictEqual(curried(1)(2, 3), 6);
    assert.strictEqual(curried(1, 2, 3), 6);
  });

  it('should support partial application/currying', function () {
    const curryRight3 = RA.curryRightN(3);
    const curried = curryRight3(source);
    assert.strictEqual(curried.length, 3);
    assert.strictEqual(curried(1)(2)(3), 6);
    assert.strictEqual(curried(1, 2)(3), 6);
    assert.strictEqual(curried(1)(2, 3), 6);
    assert.strictEqual(curried(1, 2, 3), 6);
  });

  it('should preserve context', function () {
    const ctx = { x: 10 };
    const f = function (a, b) {
      return a + b * this.x;
    };
    const g = RA.curryRightN(2, f);

    assert.strictEqual(g.call(ctx, 2, 4), 24);
    assert.strictEqual(g.call(ctx, 2).call(ctx, 4), 24);
  });

  it('should support R.__ placeholder', function () {
    const f = function (...args) {
      return args;
    };
    const g = RA.curryRightN(3, f);
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
    const f = function () {
      return Array.prototype.slice.call(arguments);
    };
    const g = RA.curryRightN(3, f);
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

  it('should forward extra arguments', function () {
    const f = function () {
      return Array.prototype.slice.call(arguments);
    };
    const g = RA.curryRightN(3, f);

    assert.sameOrderedMembers(g(1, 2, 3), [3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2, 3, 4), [4, 3, 2, 1]);
    assert.sameOrderedMembers(g(1, 2)(3, 4), [4, 3, 2, 1]);
    assert.sameOrderedMembers(g(1)(2, 3, 4), [4, 3, 2, 1]);
    assert.sameOrderedMembers(g(1)(2)(3, 4), [4, 3, 2, 1]);
  });
});
