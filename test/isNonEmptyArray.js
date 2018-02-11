import * as RA from '../src/index';
import eq from './shared/eq';

describe('isNonEmptyArray', function() {
  it('tests a value to be a non empty `Array`', function() {
    eq(RA.isNonEmptyArray([42]), true);
    eq(RA.isNonEmptyArray(new Array('content')), true);

    eq(RA.isNonEmptyArray([]), false);
    eq(RA.isNonEmptyArray(new Array()), false);
    eq(RA.isNonEmptyArray(new Array(42)), false);
    eq(RA.isNonEmptyArray(Array.prototype), false);
    eq(RA.isNonEmptyArray(void 0), false);
    eq(RA.isNonEmptyArray({}), false);
    eq(RA.isNonEmptyArray(null), false);
    eq(RA.isNonEmptyArray(undefined), false);
    eq(RA.isNonEmptyArray(42), false);
    eq(RA.isNonEmptyArray('Array'), false);
    eq(RA.isNonEmptyArray(true), false);
    eq(RA.isNonEmptyArray(false), false);
    eq(RA.isNonEmptyArray({ __proto__: Array.prototype }), false);
  });
});
