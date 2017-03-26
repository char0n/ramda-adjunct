'use strict';

const { complement } = require('ramda');

const RA = require('../src/index');
const MAX_SAFE_INTEGER = require('../src/internal/polyfills/Number.MAX_SAFE_INTEGER');
const MIN_SAFE_INTEGER = require('../src/internal/polyfills/Number.MIN_SAFE_INTEGER');
const eq = require('./shared/eq');
const polyfill = require('../src/internal/polyfills/Number.isInteger');

describe('isNotInteger', function() {
  it('tests a value for complement of `integer`', function() {
    eq(RA.isNotInteger(0), false);
    eq(RA.isNotInteger(1), false);
    eq(RA.isNotInteger(-100000), false);
    eq(RA.isNotInteger(MAX_SAFE_INTEGER), false);
    eq(RA.isNotInteger(MIN_SAFE_INTEGER), false);

    eq(RA.isNotInteger(0.1), true);
    eq(RA.isNotInteger(Math.PI), true);

    eq(RA.isNotInteger(NaN), true);
    eq(RA.isNotInteger(Infinity), true);
    eq(RA.isNotInteger(-Infinity), true);
    eq(RA.isNotInteger('10'), true);
    eq(RA.isNotInteger(true), true);
    eq(RA.isNotInteger(false), true);
    eq(RA.isNotInteger([1]), true);
  });

  it('tests polyfill for complement of `integer', function() {
    const polyfillC = complement(polyfill);

    eq(polyfillC(0), false);
    eq(polyfillC(1), false);
    eq(polyfillC(-100000), false);
    eq(polyfillC(MAX_SAFE_INTEGER), false);
    eq(polyfillC(MIN_SAFE_INTEGER), false);

    eq(polyfillC(0.1), true);
    eq(polyfillC(Math.PI), true);

    eq(polyfillC(NaN), true);
    eq(polyfillC(Infinity), true);
    eq(polyfillC(-Infinity), true);
    eq(polyfillC('10'), true);
    eq(polyfillC(true), true);
    eq(polyfillC(false), true);
    eq(polyfillC([1]), true);
  });
});
