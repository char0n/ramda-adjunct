import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('nonePass', function () {
  const odd = (n) => n % 2 !== 0;
  const divBy3 = (n) => n % 3 === 0;
  const lt20 = (n) => n < 20;
  const plusEq = (w, x, y, z) => w + x === y + z;

  it('should report whether all predicates are satisfied by a given value', function () {
    const ok = RA.nonePass([odd, divBy3, lt20]);
    assert.isFalse(ok(9)); // all ps succeed
    assert.isFalse(ok(12)); // p1 fails
    assert.isFalse(ok(7)); // p2 fails
    assert.isFalse(ok(21)); // p3 fails
    assert.isFalse(ok(2)); // p1 and p2 fails
    assert.isFalse(ok(18)); // p1 and p3 fails
    assert.isFalse(ok(23)); // p2 and p3 fails
    assert.isTrue(ok(26)); // all ps fail
  });

  it('should return true on empty predicate list', function () {
    assert.isTrue(RA.nonePass([])(3));
  });

  it('should return a curried function whose arity matches that of the highest-arity predicate', function () {
    assert.lengthOf(RA.nonePass([odd, divBy3, plusEq]), 4);
    assert.isTrue(RA.nonePass([odd, divBy3, plusEq])(26, 26, 26, 28));
    assert.isTrue(RA.nonePass([odd, divBy3, plusEq])(26)(26)(26)(28));
  });

  it('should support placeholder to specify "gaps"', function () {
    const nonePass = RA.nonePass(R.__);

    assert.isTrue(nonePass([odd, divBy3, plusEq])(26, 26, 26, 28));
  });
});
