import * as RA from '../src/index';
import eq from './shared/eq';


describe('isNonEmptyString', function () {
  it('tests a value to be an empty `String`', function () {
    eq(RA.isNonEmptyString('42'), true);

    eq(RA.isNonEmptyString(''), false);
    eq(RA.isNonEmptyString(new String('42')), false);
    eq(RA.isNonEmptyString(new String('')), false);
    eq(RA.isNonEmptyString(String.prototype), false);
    eq(RA.isNonEmptyString([]), false);
    eq(RA.isNonEmptyString([42]), false);
    eq(RA.isNonEmptyString(void 0), false);
    eq(RA.isNonEmptyString({}), false);
    eq(RA.isNonEmptyString(null), false);
    eq(RA.isNonEmptyString(undefined), false);
    eq(RA.isNonEmptyString(17), false);
    eq(RA.isNonEmptyString(true), false);
    eq(RA.isNonEmptyString(false), false);
  });
});
