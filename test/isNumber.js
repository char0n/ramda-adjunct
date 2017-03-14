'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const args = require('./shared/arguments');
const Symbol = require('./shared/Symbol');

describe('isNumber', function() {
  it('tests a value for `Number`', function() {
    eq(RA.isNumber(0), true);
    eq(RA.isNumber(0.1), true);
    eq(RA.isNumber(Object(0)), true);
    eq(RA.isNumber(Object(0.1)), true);
    eq(RA.isNumber(NaN), true);
    eq(RA.isNumber(Infinity), true);
    eq(RA.isNumber(-Infinity), true);
    eq(RA.isNumber(Number.MAX_SAFE_INTEGER || 9007199254740991), true);
    eq(RA.isNumber(Number.MIN_SAFE_INTEGER || -9007199254740991), true);
    eq(RA.isNumber(Number.MAX_VALUE), true);
    eq(RA.isNumber(Number.MIN_VALUE), true);

    eq(RA.isNumber(new Date()), false);
    eq(RA.isNumber(args), false);
    eq(RA.isNumber([1, 2, 3]), false);
    eq(RA.isNumber(Object(false)), false);
    eq(RA.isNumber(new Error()), false);
    eq(RA.isNumber(RA), false);
    eq(RA.isNumber(Array.prototype.slice), false);
    eq(RA.isNumber({ a: 1 }), false);
    eq(RA.isNumber(/x/), false);
    eq(RA.isNumber(Object('a')), false);

    if (Symbol !== 'undefined') {
      eq(RA.isNumber(Symbol), false);
    }

    eq(RA.isNumber(null), false);
    eq(RA.isNumber(undefined), false);
  });
});
