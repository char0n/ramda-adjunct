import * as RA from '../src/index';
import eq from './shared/eq';


describe('isEmptyString', function () {
  it('tests a value to be an empty `String`', function () {
    eq(RA.isEmptyString(''), true);

    eq(RA.isEmptyString('42'), false);
    eq(RA.isEmptyString(new String('')), false);
    eq(RA.isEmptyString(String.prototype), false);
    eq(RA.isEmptyString([]), false);
    eq(RA.isEmptyString([42]), false);
    eq(RA.isEmptyString(void 0), false);
    eq(RA.isEmptyString({}), false);
    eq(RA.isEmptyString(null), false);
    eq(RA.isEmptyString(undefined), false);
    eq(RA.isEmptyString(17), false);
    eq(RA.isEmptyString('String'), false);
    eq(RA.isEmptyString(true), false);
    eq(RA.isEmptyString(false), false);
  });
});
