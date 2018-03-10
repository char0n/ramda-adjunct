import * as RA from '../src/index';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNonPositive', function() {
  it('tests a value for non-positive `Number`', function() {
    eq(RA.isNonPositive(0), true);
    eq(RA.isNonPositive(-0.1), true);
    eq(RA.isNonPositive(0.1), false);
    eq(RA.isNonPositive(Object(0)), true);
    eq(RA.isNonPositive(Object(-0.1)), true);
    eq(RA.isNonPositive(Object(0.1)), false);
    eq(RA.isNonPositive(NaN), false);
    eq(RA.isNonPositive(Infinity), false);
    eq(RA.isNonPositive(-Infinity), true);
    eq(RA.isNonPositive(MAX_SAFE_INTEGER), false);
    eq(RA.isNonPositive(MIN_SAFE_INTEGER), true);
    eq(RA.isNonPositive(Number.MAX_VALUE), false);
    eq(RA.isNonPositive(Number.MIN_VALUE), false);

    eq(RA.isNonPositive(new Date()), false);
    eq(RA.isNonPositive(args), false);
    eq(RA.isNonPositive([1, 2, 3]), false);
    eq(RA.isNonPositive(Object(false)), false);
    eq(RA.isNonPositive(new Error()), false);
    eq(RA.isNonPositive(RA), false);
    eq(RA.isNonPositive(Array.prototype.slice), false);
    eq(RA.isNonPositive({ a: 1 }), false);
    eq(RA.isNonPositive(/x/), false);
    eq(RA.isNonPositive(Object('a')), false);

    if (Symbol !== 'undefined') {
      eq(RA.isNonPositive(Symbol), false);
    }

    eq(RA.isNonPositive(null), false);
    eq(RA.isNonPositive(undefined), false);
  });
});
