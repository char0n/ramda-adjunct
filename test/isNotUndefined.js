const RA = require('../src/index');
const eq = require('./shared/eq');

describe('isNotUndefined', () => {
  it('tests a value for complement of `undefined`', () => {
    eq(RA.isNotUndefined(void 0), false);
    eq(RA.isNotUndefined(undefined), false);
    eq(RA.isNotUndefined(null), true);
    eq(RA.isNotUndefined([]), true);
    eq(RA.isNotUndefined({}), true);
    eq(RA.isNotUndefined(0), true);
    eq(RA.isNotUndefined(''), true);
  });
});
