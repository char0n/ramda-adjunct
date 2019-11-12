import { assert } from 'chai';

import * as RA from '../src';

describe('isUndefined', function() {
  it('tests a value for `undefined`', function() {
    assert.isTrue(RA.isUndefined(void 0));
    assert.isTrue(RA.isUndefined(undefined));
    assert.isFalse(RA.isUndefined(null));
    assert.isFalse(RA.isUndefined([]));
    assert.isFalse(RA.isUndefined({}));
    assert.isFalse(RA.isUndefined(0));
    assert.isFalse(RA.isUndefined(''));
  });
});
