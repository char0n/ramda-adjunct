import * as RA from '../src/index';
import eq from './shared/eq';


describe('isNotNull', function () {
  it('tests a value for complement of `null`', function () {
    eq(RA.isNotNull(void 0), true);
    eq(RA.isNotNull(null), false);
    eq(RA.isNotNull([]), true);
    eq(RA.isNotNull({}), true);
    eq(RA.isNotNull(0), true);
    eq(RA.isNotNull(''), true);
  });
});
