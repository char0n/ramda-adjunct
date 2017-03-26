'use strict';

const { complement } = require('ramda');

const RA = require('../src/index');
const polyfill = require('../src/internal/polyfills/Number.isFinite');
const eq = require('./shared/eq');

describe('isNotFinite', function() {
  it('tests a value for complement of finite `Number`', function() {
    eq(RA.isNotFinite(Infinity), true);
    eq(RA.isNotFinite(NaN), true);
    eq(RA.isNotFinite(-Infinity), true);

    eq(RA.isNotFinite(0), false);
    eq(RA.isNotFinite(-0), false);
    eq(RA.isNotFinite(2e64), false);
    eq(RA.isNotFinite(324234), false);
    eq(RA.isNotFinite(1.2342), false);

    eq(RA.isNotFinite('0'), true);
    eq(RA.isNotFinite(null), true);
  });

  it('tests polyfill for complement of finite `Number', function() {
    const polyfillC = complement(polyfill);

    eq(polyfillC(Infinity), true);
    eq(polyfillC(NaN), true);
    eq(polyfillC(-Infinity), true);

    eq(polyfillC(0), false);
    eq(polyfillC(-0), false);
    eq(polyfillC(2e64), false);
    eq(polyfillC(324234), false);
    eq(polyfillC(1.2342), false);

    eq(polyfillC('0'), true);
    eq(polyfillC(null), true);
  });
});
