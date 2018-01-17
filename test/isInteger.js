import * as RA from '../src/index';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import polyfill from '../src/internal/polyfills/Number.isInteger';

describe('isInteger', function () {
  it('tests a value for `integer`', function () {
    eq(RA.isInteger(0), true);
    eq(RA.isInteger(1), true);
    eq(RA.isInteger(-100000), true);
    eq(RA.isInteger(MAX_SAFE_INTEGER), true);
    eq(RA.isInteger(MIN_SAFE_INTEGER), true);
    eq(RA.isInteger(5e+0), true);

    eq(RA.isInteger(0.1), false);
    eq(RA.isInteger(Math.PI), false);
    eq(RA.isInteger(5.56789e+0), false);

    eq(RA.isInteger(NaN), false);
    eq(RA.isInteger(Infinity), false);
    eq(RA.isInteger(-Infinity), false);
    eq(RA.isInteger('10'), false);
    eq(RA.isInteger(true), false);
    eq(RA.isInteger(false), false);
    eq(RA.isInteger([1]), false);
  });

  it('tests polyfill for `integer', function () {
    eq(polyfill(0), true);
    eq(polyfill(1), true);
    eq(polyfill(-100000), true);
    eq(polyfill(MAX_SAFE_INTEGER), true);
    eq(polyfill(MIN_SAFE_INTEGER), true);

    eq(polyfill(0.1), false);
    eq(polyfill(Math.PI), false);

    eq(polyfill(NaN), false);
    eq(polyfill(Infinity), false);
    eq(polyfill(-Infinity), false);
    eq(polyfill('10'), false);
    eq(polyfill(true), false);
    eq(polyfill(false), false);
    eq(polyfill([1]), false);
  });
});
