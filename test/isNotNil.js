import * as RA from '../src/index';
import eq from './shared/eq';


describe('isNotNil', function () {
  it('tests a value for complement of `null` or `undefined`', function () {
    eq(RA.isNotNil(void 0), false);
    eq(RA.isNotNil(null), false);
    eq(RA.isNotNil([]), true);
    eq(RA.isNotNil({}), true);
    eq(RA.isNotNil(0), true);
    eq(RA.isNotNil(''), true);
  });
});
