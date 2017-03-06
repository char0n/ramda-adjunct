'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const args = require('./shared/arguments');
const Symbol = require('./shared/Symbol');

describe('isNotObjectLike', function() {
  it('tests a value for non object-like interface', function() {
    eq(RA.isNotObjectLike({}), false);
    eq(RA.isNotObjectLike(Object(false)), false);
    eq(RA.isNotObjectLike(args), false);
    eq(RA.isNotObjectLike([1, 2, 3]), false);
    eq(RA.isNotObjectLike(Object(false)), false);
    eq(RA.isNotObjectLike(new Date()), false);
    eq(RA.isNotObjectLike(new Error()), false);
    eq(RA.isNotObjectLike(RA), false);
    eq(RA.isNotObjectLike({ a: 1 }), false);
    eq(RA.isNotObjectLike(Object(0)), false);
    eq(RA.isNotObjectLike(/x/), false);
    eq(RA.isNotObjectLike(Object('a')), false);

    eq(RA.isNotObjectLike(Symbol), true);
    eq(RA.isNotObjectLike(Array.prototype.slice), true);
    eq(RA.isNotObjectLike(null), true);
    eq(RA.isNotObjectLike(undefined), true);
  });
});
