import * as RA from '../src/index';
import eq from './shared/eq';

describe('stubArray', function() {
  it('tests `function` that returns `[]`', function() {
    eq(RA.stubArray(), []);
    eq(RA.stubArray([1]), []);
    eq(RA.stubArray(new Array()), []);
    eq(RA.stubArray(1, 2, 3), []);
  });
});
