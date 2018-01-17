import * as RA from '../src/index';
import eq from './shared/eq';

describe('stubString', function () {
  it("tests `function` that returns `'''`", function () {
    eq(RA.stubString(), '');
    eq(RA.stubString([1]), '');
    eq(RA.stubString(new Array()), '');
    eq(RA.stubString(1, 2, 3), '');
  });

  context('when called', function () {
    specify('should always return empty string', function () {
      const ret1 = RA.stubString();
      const ret2 = RA.stubString();
      eq(ret1, ret2);
    });
  });
});
