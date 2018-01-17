import * as RA from '../src/index';
import eq from './shared/eq';


describe('isUndefined', function () {
  it('tests a value for `undefined`', function () {
    eq(RA.isUndefined(void 0), true);
    eq(RA.isUndefined(undefined), true);
    eq(RA.isUndefined(null), false);
    eq(RA.isUndefined([]), false);
    eq(RA.isUndefined({}), false);
    eq(RA.isUndefined(0), false);
    eq(RA.isUndefined(''), false);
  });
});
