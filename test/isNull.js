import { assert } from 'chai';

import * as RA from '../src';

describe('isNull', function() {
  it('tests a value for `null`', function() {
    assert.isFalse(RA.isNull(void 0));
    assert.isTrue(RA.isNull(null));
    assert.isFalse(RA.isNull([]));
    assert.isFalse(RA.isNull({}));
    assert.isFalse(RA.isNull(0));
    assert.isFalse(RA.isNull(''));
  });
});
