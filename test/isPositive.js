import * as RA from '../src/index';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';


describe('isPositive', function () {
  it('tests a value for positive `Number`', function () {
    eq(RA.isPositive(0), false);
    eq(RA.isPositive(0.1), true);
    eq(RA.isPositive(Object(0)), false);
    eq(RA.isPositive(Object(0.1)), true);
    eq(RA.isPositive(NaN), false);
    eq(RA.isPositive(Infinity), true);
    eq(RA.isPositive(-Infinity), false);
    eq(RA.isPositive(MAX_SAFE_INTEGER), true);
    eq(RA.isPositive(MIN_SAFE_INTEGER), false);
    eq(RA.isPositive(Number.MAX_VALUE), true);
    eq(RA.isPositive(Number.MIN_VALUE), true);

    eq(RA.isPositive(new Date()), false);
    eq(RA.isPositive(args), false);
    eq(RA.isPositive([1, 2, 3]), false);
    eq(RA.isPositive(Object(false)), false);
    eq(RA.isPositive(new Error()), false);
    eq(RA.isPositive(RA), false);
    eq(RA.isPositive(Array.prototype.slice), false);
    eq(RA.isPositive({ a: 1 }), false);
    eq(RA.isPositive(/x/), false);
    eq(RA.isPositive(Object('a')), false);

    if (Symbol !== 'undefined') {
      eq(RA.isPositive(Symbol), false);
    }

    eq(RA.isPositive(null), false);
    eq(RA.isPositive(undefined), false);
  });
});
