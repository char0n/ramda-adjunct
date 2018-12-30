import { complement } from 'ramda';

import * as RA from '../src';
import polyfill from '../src/internal/polyfills/Number.isNaN';
import eq from './shared/eq';

describe('isNotNaN', function() {
  it('tests a value for complement of `NaN`', function() {
    eq(RA.isNotNaN(NaN), false);
    eq(RA.isNotNaN(Number.NaN), false);
    eq(RA.isNotNaN(0 / 0), false);

    eq(RA.isNotNaN('NaN'), true);
    eq(RA.isNotNaN(undefined), true);
    eq(RA.isNotNaN({}), true);
    eq(RA.isNotNaN('blabla'), true);

    eq(RA.isNotNaN(true), true);
    eq(RA.isNotNaN(null), true);
    eq(RA.isNotNaN(37), true);
    eq(RA.isNotNaN('37'), true);
    eq(RA.isNotNaN('37.37'), true);
    eq(RA.isNotNaN(''), true);
    eq(RA.isNotNaN(' '), true);
  });

  it('tests polyfill for complement of `NaN', function() {
    const polyfillC = complement(polyfill);

    eq(polyfillC(NaN), false);
    eq(polyfillC(Number.NaN), false);
    eq(polyfillC(0 / 0), false);

    eq(polyfillC('NaN'), true);
    eq(polyfillC(undefined), true);
    eq(polyfillC({}), true);
    eq(polyfillC('blabla'), true);

    eq(polyfillC(true), true);
    eq(polyfillC(null), true);
    eq(polyfillC(37), true);
    eq(polyfillC('37'), true);
    eq(polyfillC('37.37'), true);
    eq(polyfillC(''), true);
    eq(polyfillC(' '), true);
  });
});
