import * as RA from '../src';
import eq from './shared/eq';

describe('nonePass', function() {
  const odd = n => n % 2 !== 0;
  const divBy3 = n => n % 3 === 0;
  const lt20 = n => n < 20;
  const plusEq = (w, x, y, z) => w + x === y + z;

  it('reports whether all predicates are satisfied by a given value', function() {
    const ok = RA.nonePass([odd, divBy3, lt20]);
    eq(ok(9), false); // all ps succeed
    eq(ok(12), false); // p1 fails
    eq(ok(7), false); // p2 fails
    eq(ok(21), false); // p3 fails
    eq(ok(2), false); // p1 and p2 fails
    eq(ok(18), false); // p1 and p3 fails
    eq(ok(23), false); // p2 and p3 fails
    eq(ok(26), true); // all ps fail
  });

  it('returns true on empty predicate list', function() {
    eq(RA.nonePass([])(3), true);
  });

  it('returns a curried function whose arity matches that of the highest-arity predicate', function() {
    eq(RA.nonePass([odd, divBy3, plusEq]).length, 4);
    eq(RA.nonePass([odd, divBy3, plusEq])(26, 26, 26, 28), true);
    eq(RA.nonePass([odd, divBy3, plusEq])(26)(26)(26)(28), true);
  });
});
