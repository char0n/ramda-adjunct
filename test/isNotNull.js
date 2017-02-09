'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');

describe('isNotNull', () => {
  it('tests a value for complement of `null`', () => {
    eq(RA.isNotNull(void 0), true);
    eq(RA.isNotNull(null), false);
    eq(RA.isNotNull([]), true);
    eq(RA.isNotNull({}), true);
    eq(RA.isNotNull(0), true);
    eq(RA.isNotNull(''), true);
  });
});
