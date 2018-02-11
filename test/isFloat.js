import * as RA from '../src/index';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';

describe('isFloat', function() {
  it('tests a value for `float`', function() {
    eq(RA.isFloat(0), false);
    eq(RA.isFloat(1), false);
    eq(RA.isFloat(-100000), false);
    eq(RA.isFloat(MAX_SAFE_INTEGER), false);
    eq(RA.isFloat(MIN_SAFE_INTEGER), false);
    eq(RA.isFloat(5), false);

    eq(RA.isFloat(0.1), true);
    eq(RA.isFloat(Math.PI), true);
    eq(RA.isFloat(5.56789), true);

    eq(RA.isFloat(NaN), false);
    eq(RA.isFloat(Infinity), false);
    eq(RA.isFloat(-Infinity), false);
    eq(RA.isFloat('10'), false);
    eq(RA.isFloat(true), false);
    eq(RA.isFloat(false), false);
    eq(RA.isFloat([1]), false);
  });
});
