'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const args = require('./shared/arguments');
const Symbol = require('./shared/Symbol');

describe('isNotDate', function() {
  it('tests a value for complement of `Date`', function() {
    eq(RA.isNotDate(new Date()), false);

    eq(RA.isNotDate(Date.now()), true);
    eq(RA.isNotDate(args), true);
    eq(RA.isNotDate([1, 2, 3]), true);
    eq(RA.isNotDate(Object(true)), true);
    eq(RA.isNotDate(new Error()), true);
    eq(RA.isNotDate(RA), true);
    eq(RA.isNotDate(Array.prototype.slice), true);
    eq(RA.isNotDate({ a: 1 }), true);
    eq(RA.isNotDate(Object(0)), true);
    eq(RA.isNotDate(/x/), true);
    eq(RA.isNotDate(Object('a')), true);

    if (Symbol !== 'undefined') {
      eq(RA.isNotDate(Symbol), true);
    }

    eq(RA.isNotDate(null), true);
    eq(RA.isNotDate(undefined), true);
  });
});
