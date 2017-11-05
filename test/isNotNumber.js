import * as RA from '../src/index';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotNumber', function() {
  it('tests a value for complement of `Number`', function() {
    eq(RA.isNotNumber(0), false);
    eq(RA.isNotNumber(0.1), false);
    eq(RA.isNotNumber(Object(0)), false);
    eq(RA.isNotNumber(Object(0.1)), false);
    eq(RA.isNotNumber(NaN), false);
    eq(RA.isNotNumber(Infinity), false);
    eq(RA.isNotNumber(-Infinity), false);
    eq(RA.isNotNumber(MAX_SAFE_INTEGER), false);
    eq(RA.isNotNumber(MIN_SAFE_INTEGER), false);
    eq(RA.isNotNumber(Number.MAX_VALUE), false);
    eq(RA.isNotNumber(Number.MIN_VALUE), false);

    eq(RA.isNotNumber(new Date()), true);
    eq(RA.isNotNumber(args), true);
    eq(RA.isNotNumber([1, 2, 3]), true);
    eq(RA.isNotNumber(Object(true)), true);
    eq(RA.isNotNumber(new Error()), true);
    eq(RA.isNotNumber(RA), true);
    eq(RA.isNotNumber(Array.prototype.slice), true);
    eq(RA.isNotNumber({ a: 1 }), true);
    eq(RA.isNotNumber(/x/), true);
    eq(RA.isNotNumber(Object('a')), true);

    if (Symbol !== 'undefined') {
      eq(RA.isNotNumber(Symbol), true);
    }

    eq(RA.isNotNumber(null), true);
    eq(RA.isNotNumber(undefined), true);
  });
});
