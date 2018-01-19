import * as RA from '../src/index';
import eq from './shared/eq';


describe('isEmptyArray', function () {
  it('tests a value to be an empty `Array`', function () {
    eq(RA.isEmptyArray([]), true);
    eq(RA.isEmptyArray(new Array()), true);
    eq(RA.isEmptyArray(Array.prototype), true);

    eq(RA.isEmptyArray([1]), false);
    eq(RA.isEmptyArray(void 0), false);
    eq(RA.isEmptyArray({}), false);
    eq(RA.isEmptyArray(null), false);
    eq(RA.isEmptyArray(undefined), false);
    eq(RA.isEmptyArray(17), false);
    eq(RA.isEmptyArray('Array'), false);
    eq(RA.isEmptyArray(true), false);
    eq(RA.isEmptyArray(false), false);
    eq(RA.isEmptyArray({ __proto__: Array.prototype }), false);
  });
});
