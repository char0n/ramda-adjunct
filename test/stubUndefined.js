import * as RA from '../src/index';
import eq from './shared/eq';


describe('stubUndefined', function () {
  it('tests `function` that returns `undefined`', function () {
    eq(RA.stubUndefined(), undefined);
    eq(RA.stubUndefined([1]), undefined);
    eq(RA.stubUndefined(new Array()), undefined);
    eq(RA.stubUndefined(1, 2, 3), undefined);
  });
});
