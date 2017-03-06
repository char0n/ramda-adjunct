'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const args = require('./shared/arguments');
const Symbol = require('./shared/Symbol');

describe('isNotObject', function() {
  it('tests a value for complement of language type of `Object`', function() {
    eq(RA.isNotObject({}), false);
    eq(RA.isNotObject(Object(false)), false);
    eq(RA.isNotObject(Object.create(null)), false);
    eq(RA.isNotObject(args), false);
    eq(RA.isNotObject([1, 2, 3]), false);
    eq(RA.isNotObject(Object(false)), false);
    eq(RA.isNotObject(new Date()), false);
    eq(RA.isNotObject(new Error()), false);
    eq(RA.isNotObject(RA), false);
    eq(RA.isNotObject(Array.prototype.slice), false);
    eq(RA.isNotObject({ a: 1 }), false);
    eq(RA.isNotObject(Object(0)), false);
    eq(RA.isNotObject(/x/), false);
    eq(RA.isNotObject(Object('a')), false);
    eq(RA.isNotObject(Symbol), typeof Symbol === 'undefined');

    eq(RA.isNotObject(null), true);
    eq(RA.isNotObject(undefined), true);
  });
});
