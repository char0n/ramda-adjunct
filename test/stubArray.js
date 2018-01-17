import assert from 'assert';
import * as RA from '../src/index';
import eq from './shared/eq';


describe('stubArray', function () {
  it('tests `function` that returns empty array', function () {
    eq(RA.stubArray(), []);
    eq(RA.stubArray([1]), []);
    eq(RA.stubArray(new Array()), []);
    eq(RA.stubArray(1, 2, 3), []);
  });

  context('when called', function () {
    specify('should always return new empty array', function () {
      const ret1 = RA.stubArray();
      const ret2 = RA.stubArray();
      assert.notStrictEqual(ret1, ret2);
    });
  });
});
