import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('notAllPass', function () {
  const odd = (n) => n % 2 !== 0;
  const lt20 = (n) => n < 20;
  const gt5 = (n) => n > 5;
  const plusEq = (w, x, y, z) => w + x === y + z;

  it('should report whether all predicates are satisfied by a given value', function () {
    const ok = RA.notAllPass([odd, lt20, gt5]);
    assert.isFalse(ok(7)); // all ps succeed
    assert.isTrue(ok(10)); // p1 fails
    assert.isTrue(ok(21)); // p2 fails
    assert.isTrue(ok(3)); // p3 fails
    assert.isTrue(ok(22)); // p1 and p2 fails
    assert.isTrue(ok(4)); // p1 and p3 fails
  });

  it('should return false on empty predicate list', function () {
    assert.isFalse(RA.notAllPass([])(3));
  });

  it('should return a curried function whose arity matches that of the highest-arity predicate', function () {
    assert.lengthOf(RA.notAllPass([odd, gt5, plusEq]), 4);
    assert.isTrue(RA.notAllPass([odd, gt5, plusEq])(9, 9, 9, 10));
    assert.isTrue(RA.notAllPass([odd, gt5, plusEq])(9)(9)(9)(10));
  });

  it('should support placeholder to specify "gaps"', function () {
    const notAllPass = RA.notAllPass(R.__);

    assert.isTrue(notAllPass([odd, gt5, plusEq])(9, 9, 9, 10));
  });
});
