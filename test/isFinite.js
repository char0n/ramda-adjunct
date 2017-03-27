import RA from '../src/index';
import polyfill from '../src/internal/polyfills/Number.isFinite';
import eq from './shared/eq';

describe('isFinite', function() {
  it('tests a value for finite `Number`', function() {
    eq(RA.isFinite(Infinity), false);
    eq(RA.isFinite(NaN), false);
    eq(RA.isFinite(-Infinity), false);

    eq(RA.isFinite(0), true);
    eq(RA.isFinite(-0), true);
    eq(RA.isFinite(2e64), true);
    eq(RA.isFinite(324234), true);
    eq(RA.isFinite(1.2342), true);

    // Would've been true with global isFinite('0').
    eq(RA.isFinite('0'), false);

    // Would've been true with global isFinite(null).
    eq(RA.isFinite(null), false);
  });

  it('tests polyfill for finite `Number', function() {
    eq(polyfill(Infinity), false);
    eq(polyfill(NaN), false);
    eq(polyfill(-Infinity), false);

    eq(polyfill(0), true);
    eq(polyfill(-0), true);
    eq(polyfill(2e64), true);
    eq(polyfill(324234), true);
    eq(polyfill(1.2342), true);

    // Would've been true with global isFinite('0').
    eq(polyfill('0'), false);

    // Would've been true with global isFinite(null).
    eq(polyfill(null), false);
  });
});
