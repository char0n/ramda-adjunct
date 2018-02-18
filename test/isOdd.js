import * as RA from '../src/index';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isOdd', function() {
  it('tests a value for odd integer `Number`', function() {
    eq(RA.isOdd(0), false);
    eq(RA.isOdd(4), false);
    eq(RA.isOdd(Object(0)), false);
    eq(RA.isOdd(Object(0.1)), false);
    eq(RA.isOdd(NaN), false);
    eq(RA.isOdd(3), true);
    eq(RA.isOdd(7), true);
    eq(RA.isOdd(-3), true);
    eq(RA.isOdd(-7), true);
    eq(RA.isOdd(-Infinity), false);
    eq(RA.isOdd(MAX_SAFE_INTEGER), true);
    eq(RA.isOdd(MIN_SAFE_INTEGER), true);
    eq(RA.isOdd(Number.MAX_VALUE), false);
    eq(RA.isOdd(Number.MIN_VALUE), false);

    eq(RA.isOdd(new Date()), false);
    eq(RA.isOdd(args), false);
    eq(RA.isOdd([1, 2, 3]), false);
    eq(RA.isOdd(Object(false)), false);
    eq(RA.isOdd(new Error()), false);
    eq(RA.isOdd(RA), false);
    eq(RA.isOdd(Array.prototype.slice), false);
    eq(RA.isOdd({ a: 1 }), false);
    eq(RA.isOdd(/x/), false);
    eq(RA.isOdd(Object('a')), false);

    if (Symbol !== 'undefined') {
      eq(RA.isOdd(Symbol), false);
    }

    eq(RA.isOdd(null), false);
    eq(RA.isOdd(undefined), false);
  });
});
