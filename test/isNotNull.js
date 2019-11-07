import { assert } from 'chai';

import * as RA from '../src';

describe('isNotNull', function() {
  it('tests a value for complement of `null`', function() {
    assert.isTrue(RA.isNotNull(void 0));
    assert.isFalse(RA.isNotNull(null));
    assert.isTrue(RA.isNotNull([]));
    assert.isTrue(RA.isNotNull({}));
    assert.isTrue(RA.isNotNull(0));
    assert.isTrue(RA.isNotNull(''));
  });
});
