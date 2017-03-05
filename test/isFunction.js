'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const Symbol = require('./shared/Symbol');
const args = require('./shared/arguments');
const genFunc = require('./shared/genFunc');
const asyncFunc = require('./shared/asyncFunc');

describe('isFunction', function() {
  it('tests a value for `Function`', function() {
    eq(RA.isFunction(genFunc), typeof genFunc === 'function');
    eq(RA.isFunction(asyncFunc), typeof asyncFunc === 'function');
    eq(RA.isFunction(Symbol), typeof Symbol === 'function');
    eq(RA.isFunction(() => {}), true);
    eq(RA.isFunction(function() {}), true);
    eq(RA.isFunction(Array.prototype.slice), true);
    eq(RA.isFunction(args), false);
    eq(RA.isFunction([1, 2, 3]), false);
    eq(RA.isFunction(true), false);
    eq(RA.isFunction(new Date()), false);
    eq(RA.isFunction(new Error()), false);
    eq(RA.isFunction({ 0: 1, length: 1 }), false);
    eq(RA.isFunction(1), false);
    eq(RA.isFunction(/x/), false);
  });
});
