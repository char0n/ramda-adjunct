import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isEmptyString', function () {
  it('should test value for an empty `String`', function () {
    assert.isTrue(RA.isEmptyString(''));

    assert.isFalse(RA.isEmptyString('42'));
    assert.isFalse(RA.isEmptyString(new String('')));
    assert.isFalse(RA.isEmptyString(String.prototype));
    assert.isFalse(RA.isEmptyString([]));
    assert.isFalse(RA.isEmptyString([42]));
    assert.isFalse(RA.isEmptyString(void 0));
    assert.isFalse(RA.isEmptyString({}));
    assert.isFalse(RA.isEmptyString(null));
    assert.isFalse(RA.isEmptyString(undefined));
    assert.isFalse(RA.isEmptyString(17));
    assert.isFalse(RA.isEmptyString('String'));
    assert.isFalse(RA.isEmptyString(true));
    assert.isFalse(RA.isEmptyString(false));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isEmptyString = RA.isEmptyString(R.__);

    assert.isTrue(isEmptyString(''));
  });
});
