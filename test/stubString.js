import * as RA from '../src/index';
import eq from './shared/eq';

describe('stubString', function() {
  it("tests `function` that returns `'''`", function() {
    eq(RA.stubString(), '');
    eq(RA.stubString([1]), '');
    eq(RA.stubString(new Array()), '');
    eq(RA.stubString(1, 2, 3), '');
  });
});
