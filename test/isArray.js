import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isArray', function () {
  it('should test a value for `Array`', function () {
    assert.isTrue(RA.isArray([]));
    assert.isTrue(RA.isArray([1]));
    assert.isTrue(RA.isArray(new Array()));
    assert.isTrue(RA.isArray(Array.prototype));

    assert.isFalse(RA.isArray(void 0));
    assert.isFalse(RA.isArray({}));
    assert.isFalse(RA.isArray(null));
    assert.isFalse(RA.isArray(undefined));
    assert.isFalse(RA.isArray(17));
    assert.isFalse(RA.isArray('Array'));
    assert.isFalse(RA.isArray(true));
    assert.isFalse(RA.isArray(false));
    assert.isFalse(RA.isArray({ __proto__: Array.prototype }));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isArray = RA.isArray(R.__);

    assert.isTrue(isArray([]));
  });
});
