const RA = require('../src/index');
const eq = require('./shared/eq');

describe('isUndefined', () => {
  it('tests a value for `undefined`', () => {
    eq(RA.isUndefined(void 0), true);
    eq(RA.isUndefined(undefined), true);
    eq(RA.isUndefined(null), false);
    eq(RA.isUndefined([]), false);
    eq(RA.isUndefined({}), false);
    eq(RA.isUndefined(0), false);
    eq(RA.isUndefined(''), false);
  });
});
