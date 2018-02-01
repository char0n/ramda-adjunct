import * as RA from '../src/index';
import eq from './shared/eq';


describe('notAllPass', function () {
  const odd = n => n % 2 !== 0;
  const lt20 = n => n < 20;
  const gt5 = n => n > 5;
  const plusEq = (w, x, y, z) => w + x === y + z;

  it('reports whether all predicates are satisfied by a given value', function () {
    const ok = RA.notAllPass([odd, lt20, gt5]);
    eq(ok(7), false); // all ps succeed
    eq(ok(10), true); // p1 fails
    eq(ok(21), true); // p2 fails
    eq(ok(3), true); // p3 fails
    eq(ok(22), true); // p1 and p2 fails
    eq(ok(4), true); // p1 and p3 fails
  });

  it('returns false on empty predicate list', function () {
    eq(RA.notAllPass([])(3), false);
  });

  it('returns a curried function whose arity matches that of the highest-arity predicate', function () {
    eq(RA.notAllPass([odd, gt5, plusEq]).length, 4);
    eq(RA.notAllPass([odd, gt5, plusEq])(9, 9, 9, 10), true);
    eq(RA.notAllPass([odd, gt5, plusEq])(9)(9)(9)(10), true);
  });
});
