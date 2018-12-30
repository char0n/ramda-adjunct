import * as R from 'ramda';

import * as RA from '../src';
import polyfill from '../src/internal/polyfills/Number.isNaN';
import eq from './shared/eq';

describe('isNaN', function() {
  it('should test value for a `NaN`', function() {
    eq(RA.isNaN(NaN), true);
    eq(RA.isNaN(Number.NaN), true);
    eq(RA.isNaN(0 / 0), true);

    // e.g. these would have been true with global isNaN().
    eq(RA.isNaN('NaN'), false);
    eq(RA.isNaN(undefined), false);
    eq(RA.isNaN({}), false);
    eq(RA.isNaN('blabla'), false);

    // These all return false.
    eq(RA.isNaN(true), false);
    eq(RA.isNaN(null), false);
    eq(RA.isNaN(37), false);
    eq(RA.isNaN('37'), false);
    eq(RA.isNaN('37.37'), false);
    eq(RA.isNaN(''), false);
    eq(RA.isNaN(' '), false);
  });

  it('should test polyfill for a `NaN', function() {
    eq(polyfill(NaN), true);
    eq(polyfill(Number.NaN), true);
    eq(polyfill(0 / 0), true);

    // e.g. these would have been true with global isNaN().
    eq(polyfill('NaN'), false);
    eq(polyfill(undefined), false);
    eq(polyfill({}), false);
    eq(polyfill('blabla'), false);

    // These all return false.
    eq(polyfill(true), false);
    eq(polyfill(null), false);
    eq(polyfill(37), false);
    eq(polyfill('37'), false);
    eq(polyfill('37.37'), false);
    eq(polyfill(''), false);
    eq(polyfill(' '), false);
  });

  it('should support placeholder to specify "gaps"', function() {
    const isNaN = RA.isNaN(R.__);

    eq(isNaN(NaN), true);
  });
});
