import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isValidNumber', function() {
  it('tests a value for a valid `Number`', function() {
    eq(RA.isValidNumber(0), true);
    eq(RA.isValidNumber(0.1), true);
    eq(RA.isValidNumber(-0.1), true);
    eq(RA.isValidNumber(1), true);
    eq(RA.isValidNumber(-1), true);
    eq(RA.isValidNumber(MAX_SAFE_INTEGER), true);
    eq(RA.isValidNumber(MIN_SAFE_INTEGER), true);
    eq(RA.isValidNumber(Number.MAX_VALUE), true);
    eq(RA.isValidNumber(Number.MIN_VALUE), true);

    eq(RA.isValidNumber(NaN), false);
    eq(RA.isValidNumber(Infinity), false);
    eq(RA.isValidNumber(-Infinity), false);
    eq(RA.isValidNumber(new Date()), false);
    eq(RA.isValidNumber(args), false);
    eq(RA.isValidNumber([1, 2, 3]), false);
    eq(RA.isValidNumber(Object(false)), false);
    eq(RA.isValidNumber(new Error()), false);
    eq(RA.isValidNumber(RA), false);
    eq(RA.isValidNumber(Array.prototype.slice), false);
    eq(RA.isValidNumber({ a: 1 }), false);
    eq(RA.isValidNumber(/x/), false);
    eq(RA.isValidNumber(Object('a')), false);

    if (Symbol !== 'undefined') {
      eq(RA.isValidNumber(Symbol), false);
    }

    eq(RA.isValidNumber(null), false);
    eq(RA.isValidNumber(undefined), false);
  });
});
