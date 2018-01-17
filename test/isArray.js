import * as RA from '../src/index';
import eq from './shared/eq';

describe('isArray', function () {
  it('tests a value for `Array`', function () {
    eq(RA.isArray([]), true);
    eq(RA.isArray([1]), true);
    eq(RA.isArray(new Array()), true);
    eq(RA.isArray(Array.prototype), true);

    eq(RA.isArray(void 0), false);
    eq(RA.isArray({}), false);
    eq(RA.isArray(null), false);
    eq(RA.isArray(undefined), false);
    eq(RA.isArray(17), false);
    eq(RA.isArray('Array'), false);
    eq(RA.isArray(true), false);
    eq(RA.isArray(false), false);
    eq(RA.isArray({ __proto__: Array.prototype }), false);
  });
});
