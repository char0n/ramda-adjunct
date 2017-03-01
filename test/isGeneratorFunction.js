'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const Symbol = require('./shared/Symbol');
const args = require('./shared/arguments');
const genFunc = require('./shared/genFunc');

describe('isGeneratorFunction', function() {
  it('tests a value for `Generator Function`', function() {
    eq(RA.isGeneratorFunction(genFunc), typeof genFunc === 'function');
    eq(RA.isGeneratorFunction(args), false);
    eq(RA.isGeneratorFunction([1, 2, 3]), false);
    eq(RA.isGeneratorFunction(true), false);
    eq(RA.isGeneratorFunction(new Date()), false);
    eq(RA.isGeneratorFunction(new Error()), false);
    eq(RA.isGeneratorFunction(Array.prototype.slice), false);
    eq(RA.isGeneratorFunction({ 0: 1, length: 1 }), false);
    eq(RA.isGeneratorFunction(1), false);
    eq(RA.isGeneratorFunction(/x/), false);
    eq(RA.isGeneratorFunction(Symbol), false);
  });
});
