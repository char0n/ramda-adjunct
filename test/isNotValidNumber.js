import * as RA from '../src/index';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';


describe('isNotValidNumber', function () {
  it('tests a value for complement of valid `Number`', function () {
    eq(RA.isNotValidNumber(0), false);
    eq(RA.isNotValidNumber(0.1), false);
    eq(RA.isNotValidNumber(-0.1), false);
    eq(RA.isNotValidNumber(1), false);
    eq(RA.isNotValidNumber(-1), false);
    eq(RA.isNotValidNumber(MAX_SAFE_INTEGER), false);
    eq(RA.isNotValidNumber(MIN_SAFE_INTEGER), false);
    eq(RA.isNotValidNumber(Number.MAX_VALUE), false);
    eq(RA.isNotValidNumber(Number.MIN_VALUE), false);

    eq(RA.isNotValidNumber(NaN), true);
    eq(RA.isNotValidNumber(Infinity), true);
    eq(RA.isNotValidNumber(-Infinity), true);
    eq(RA.isNotValidNumber(new Date()), true);
    eq(RA.isNotValidNumber(args), true);
    eq(RA.isNotValidNumber([1, 2, 3]), true);
    eq(RA.isNotValidNumber(Object(true)), true);
    eq(RA.isNotValidNumber(new Error()), true);
    eq(RA.isNotValidNumber(RA), true);
    eq(RA.isNotValidNumber(Array.prototype.slice), true);
    eq(RA.isNotValidNumber({ a: 1 }), true);
    eq(RA.isNotValidNumber(/x/), true);
    eq(RA.isNotValidNumber(Object('a')), true);

    if (Symbol !== 'undefined') {
      eq(RA.isNotValidNumber(Symbol), true);
    }

    eq(RA.isNotValidNumber(null), true);
    eq(RA.isNotValidNumber(undefined), true);
  });
});
