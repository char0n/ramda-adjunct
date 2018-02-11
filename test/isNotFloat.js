import * as RA from '../src/index';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';

describe('isNotFloat', function() {
  it('tests a value for complement of a `float`', function() {
    eq(RA.isNotFloat(0), true);
    eq(RA.isNotFloat(1), true);
    eq(RA.isNotFloat(-100000), true);
    eq(RA.isNotFloat(MAX_SAFE_INTEGER), true);
    eq(RA.isNotFloat(MIN_SAFE_INTEGER), true);
    eq(RA.isNotFloat(5), true);

    eq(RA.isNotFloat(0.1), false);
    eq(RA.isNotFloat(Math.PI), false);
    eq(RA.isNotFloat(5.56789), false);

    eq(RA.isNotFloat(NaN), true);
    eq(RA.isNotFloat(Infinity), true);
    eq(RA.isNotFloat(-Infinity), true);
    eq(RA.isNotFloat('10'), true);
    eq(RA.isNotFloat(true), true);
    eq(RA.isNotFloat(false), true);
    eq(RA.isNotFloat([1]), true);
  });
});
