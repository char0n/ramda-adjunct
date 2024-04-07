import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isEmptyArray', function () {
  it('should test value for an empty `Array`', function () {
    assert.isTrue(RA.isEmptyArray([]));
    assert.isTrue(RA.isEmptyArray(new Array()));
    assert.isTrue(RA.isEmptyArray(Array.prototype));

    assert.isFalse(RA.isEmptyArray([1]));
    assert.isFalse(RA.isEmptyArray(void 0));
    assert.isFalse(RA.isEmptyArray({}));
    assert.isFalse(RA.isEmptyArray(null));
    assert.isFalse(RA.isEmptyArray(undefined));
    assert.isFalse(RA.isEmptyArray(17));
    assert.isFalse(RA.isEmptyArray('Array'));
    assert.isFalse(RA.isEmptyArray(true));
    assert.isFalse(RA.isEmptyArray(false));
    assert.isFalse(RA.isEmptyArray({ __proto__: Array.prototype }));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isEmptyArray = RA.isEmptyArray(R.__);

    assert.isTrue(isEmptyArray([]));
  });
});
