'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const Symbol = require('./shared/Symbol');
const args = require('./shared/arguments');
const genFunc = require('./shared/genFunc');
const asyncFunc = require('./shared/asyncFunc');

describe('isNotFunction', function() {
  it('tests a value for complement of `Function`', function() {
    eq(RA.isNotFunction(genFunc), typeof genFunc !== 'function');
    eq(RA.isNotFunction(asyncFunc), typeof asyncFunc !== 'function');
    eq(RA.isNotFunction(Symbol), typeof Symbol !== 'function');
    eq(RA.isNotFunction(() => {}), false);
    eq(RA.isNotFunction(function() {}), false);
    eq(RA.isNotFunction(Array.prototype.slice), false);
    eq(RA.isNotFunction(args), true);
    eq(RA.isNotFunction([1, 2, 3]), true);
    eq(RA.isNotFunction(true), true);
    eq(RA.isNotFunction(new Date()), true);
    eq(RA.isNotFunction(new Error()), true);
    eq(RA.isNotFunction({ 0: 1, length: 1 }), true);
    eq(RA.isNotFunction(1), true);
    eq(RA.isNotFunction(/x/), true);
  });
});
