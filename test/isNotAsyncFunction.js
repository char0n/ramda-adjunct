'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const Symbol = require('./shared/Symbol');
const args = require('./shared/arguments');
const asyncFunc = require('./shared/asyncFunc');

describe('isNotAsyncFunction', function() {
  it('tests a value for complement of `Async Function`', function() {
    eq(RA.isNotAsyncFunction(asyncFunc), typeof asyncFunc !== 'function');
    eq(RA.isNotAsyncFunction(args), true);
    eq(RA.isNotAsyncFunction([1, 2, 3]), true);
    eq(RA.isNotAsyncFunction(true), true);
    eq(RA.isNotAsyncFunction(new Date()), true);
    eq(RA.isNotAsyncFunction(new Error()), true);
    eq(RA.isNotAsyncFunction(Array.prototype.slice), true);
    eq(RA.isNotAsyncFunction({ 0: 1, length: 1 }), true);
    eq(RA.isNotAsyncFunction(1), true);
    eq(RA.isNotAsyncFunction(/x/), true);
    eq(RA.isNotAsyncFunction(Symbol), true);
  });
});
