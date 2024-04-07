import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('isNotNil', function () {
  it('tests a value for complement of `null` or `undefined`', function () {
    assert.isFalse(RA.isNotNil(void 0));
    assert.isFalse(RA.isNotNil(null));
    assert.isTrue(RA.isNotNil([]));
    assert.isTrue(RA.isNotNil({}));
    assert.isTrue(RA.isNotNil(0));
    assert.isTrue(RA.isNotNil(''));
  });
});
