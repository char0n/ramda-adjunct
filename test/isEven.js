import RA from '../src/index';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';


describe('isEven', function() {
  it('tests a value for even integer `Number`', function() {
    eq(RA.isEven(0), true);
    eq(RA.isEven(4), true);
    eq(RA.isEven(Object(4)), false);
    eq(RA.isEven(Object(0.1)), false);
    eq(RA.isEven(Number(6)), true);
    eq(RA.isEven(new Number(6)), false);
    eq(RA.isEven(NaN), false);
    eq(RA.isEven(3), false);
    eq(RA.isEven(7), false);
    eq(RA.isEven(-3), false);
    eq(RA.isEven(-7), false);
    eq(RA.isEven(-Infinity), false);
    eq(RA.isEven(MAX_SAFE_INTEGER), false);
    eq(RA.isEven(MIN_SAFE_INTEGER), false);
    eq(RA.isEven(Number.MAX_VALUE), true);
    eq(RA.isEven(Number.MIN_VALUE), false);

    eq(RA.isEven(new Date()), false);
    eq(RA.isEven(args), false);
    eq(RA.isEven([1, 2, 3]), false);
    eq(RA.isEven(Object(false)), false);
    eq(RA.isEven(new Error()), false);
    eq(RA.isEven(RA), false);
    eq(RA.isEven(Array.prototype.slice), false);
    eq(RA.isEven({ a: 1 }), false);
    eq(RA.isEven(/x/), false);
    eq(RA.isEven(Object('a')), false);

    if (Symbol !== 'undefined') {
      eq(RA.isEven(Symbol), false);
    }

    eq(RA.isOdd(null), false);
    eq(RA.isOdd(undefined), false);
  });
});
