import * as RA from '../src';
import eq from './shared/eq';

describe('stubNull', function() {
  it('tests `function` that returns `null`', function() {
    eq(RA.stubNull(), null);
    eq(RA.stubNull([1]), null);
    eq(RA.stubNull(new Array()), null);
    eq(RA.stubNull(1, 2, 3), null);
  });
});
