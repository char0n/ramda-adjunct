import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNonNegative', function() {
  it('tests a value for non-negative `Number`', function() {
    eq(RA.isNonNegative(0), true);
    eq(RA.isNonNegative(-0.1), false);
    eq(RA.isNonNegative(0.1), true);
    eq(RA.isNonNegative(Object(0)), true);
    eq(RA.isNonNegative(Object(-0.1)), false);
    eq(RA.isNonNegative(Object(0.1)), true);
    eq(RA.isNonNegative(NaN), false);
    eq(RA.isNonNegative(Infinity), true);
    eq(RA.isNonNegative(-Infinity), false);
    eq(RA.isNonNegative(MAX_SAFE_INTEGER), true);
    eq(RA.isNonNegative(MIN_SAFE_INTEGER), false);
    eq(RA.isNonNegative(Number.MAX_VALUE), true);
    eq(RA.isNonNegative(Number.MIN_VALUE), true);

    eq(RA.isNonNegative(new Date()), false);
    eq(RA.isNonNegative(args), false);
    eq(RA.isNonNegative([1, 2, 3]), false);
    eq(RA.isNonNegative(Object(false)), false);
    eq(RA.isNonNegative(new Error()), false);
    eq(RA.isNonNegative(RA), false);
    eq(RA.isNonNegative(Array.prototype.slice), false);
    eq(RA.isNonNegative({ a: 1 }), false);
    eq(RA.isNonNegative(/x/), false);
    eq(RA.isNonNegative(Object('a')), false);

    if (Symbol !== 'undefined') {
      eq(RA.isNonNegative(Symbol), false);
    }

    eq(RA.isNonNegative(null), false);
    eq(RA.isNonNegative(undefined), false);
  });
});
