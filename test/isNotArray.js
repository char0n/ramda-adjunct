'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');

describe('isNotArray', function() {
  it('tests a value for complement of `Array`', function() {
    eq(RA.isNotArray([]), false);
    eq(RA.isNotArray([1]), false);
    eq(RA.isNotArray(new Array()), false);
    eq(RA.isNotArray(Array.prototype), false);

    eq(RA.isNotArray(void 0), true);
    eq(RA.isNotArray({}), true);
    eq(RA.isNotArray(null), true);
    eq(RA.isNotArray(undefined), true);
    eq(RA.isNotArray(17), true);
    eq(RA.isNotArray('Array'), true);
    eq(RA.isNotArray(true), true);
    eq(RA.isNotArray(true), true);
    eq(RA.isNotArray({ __proto__: Array.prototype }), true);
  });
});
