'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');

describe('isNotUndefined', function() {
  it('tests a value for complement of `undefined`', function() {
    eq(RA.isNotUndefined(void 0), false);
    eq(RA.isNotUndefined(undefined), false);
    eq(RA.isNotUndefined(null), true);
    eq(RA.isNotUndefined([]), true);
    eq(RA.isNotUndefined({}), true);
    eq(RA.isNotUndefined(0), true);
    eq(RA.isNotUndefined(''), true);
  });
});
