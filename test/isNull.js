'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');

describe('isNull', function() {
  it('tests a value for `null`', function() {
    eq(RA.isNull(void 0), false);
    eq(RA.isNull(null), true);
    eq(RA.isNull([]), false);
    eq(RA.isNull({}), false);
    eq(RA.isNull(0), false);
    eq(RA.isNull(''), false);
  });
});
