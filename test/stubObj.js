import { assert } from 'chai';

import * as RA from '../src';

describe('stubObj', function() {
  it('tests `function` that returns new empty object', function() {
    assert.deepEqual(RA.stubObj(), {});
    assert.deepEqual(RA.stubObj([1]), {});
    assert.deepEqual(RA.stubObj(new Array()), {});
    assert.deepEqual(RA.stubObj(1, 2, 3), {});
  });

  context('when called', function() {
    specify('should always return new empty object', function() {
      const ret1 = RA.stubObj();
      const ret2 = RA.stubObj();
      assert.notStrictEqual(ret1, ret2);
    });
  });
});
