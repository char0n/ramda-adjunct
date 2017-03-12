'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const args = require('./shared/arguments');
const Symbol = require('./shared/Symbol');

describe('isDate', function() {
  it('tests a value for `Date`', function() {
    eq(RA.isDate(new Date()), true);

    eq(RA.isDate(Date.now()), false);
    eq(RA.isDate(args), false);
    eq(RA.isDate([1, 2, 3]), false);
    eq(RA.isDate(Object(false)), false);
    eq(RA.isDate(new Error()), false);
    eq(RA.isDate(RA), false);
    eq(RA.isDate(Array.prototype.slice), false);
    eq(RA.isDate({ a: 1 }), false);
    eq(RA.isDate(Object(0)), false);
    eq(RA.isDate(/x/), false);
    eq(RA.isDate(Object('a')), false);
    eq(RA.isDate(Symbol), typeof Symbol === 'undefined');
    eq(RA.isDate(null), false);
    eq(RA.isDate(undefined), false);
  });
});
