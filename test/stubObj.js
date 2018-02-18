import assert from 'assert';
import * as RA from '../src/index';
import eq from './shared/eq';

describe('stubObj', function() {
  it('tests `function` that returns new empty object', function() {
    eq(RA.stubObj(), {});
    eq(RA.stubObj([1]), {});
    eq(RA.stubObj(new Array()), {});
    eq(RA.stubObj(1, 2, 3), {});
  });

  context('when called', function() {
    specify('should always return new empty object', function() {
      const ret1 = RA.stubObj();
      const ret2 = RA.stubObj();
      assert.notStrictEqual(ret1, ret2);
    });
  });
});
