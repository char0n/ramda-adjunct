'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const args = require('./shared/arguments');
const Symbol = require('./shared/Symbol');

describe('isObjectLike', function() {
  it('tests a value for object-like interface', function() {
    eq(RA.isObjectLike({}), true);
    eq(RA.isObjectLike(Object(true)), true);
    eq(RA.isObjectLike(args), true);
    eq(RA.isObjectLike([1, 2, 3]), true);
    eq(RA.isObjectLike(Object(false)), true);
    eq(RA.isObjectLike(new Date()), true);
    eq(RA.isObjectLike(new Error()), true);
    eq(RA.isObjectLike(RA), true);
    eq(RA.isObjectLike({ a: 1 }), true);
    eq(RA.isObjectLike(Object(0)), true);
    eq(RA.isObjectLike(/x/), true);
    eq(RA.isObjectLike(Object('a')), true);

    eq(RA.isObjectLike(Symbol), false);
    eq(RA.isObjectLike(Array.prototype.slice), false);
    eq(RA.isObjectLike(null), false);
    eq(RA.isObjectLike(undefined), false);
  });
});
