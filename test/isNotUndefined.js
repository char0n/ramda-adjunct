import { assert } from 'chai';

import * as RA from '../src';

describe('isNotUndefined', function() {
  it('tests a value for complement of `undefined`', function() {
    assert.isFalse(RA.isNotUndefined(void 0));
    assert.isFalse(RA.isNotUndefined(undefined));
    assert.isTrue(RA.isNotUndefined(null));
    assert.isTrue(RA.isNotUndefined([]));
    assert.isTrue(RA.isNotUndefined({}));
    assert.isTrue(RA.isNotUndefined(0));
    assert.isTrue(RA.isNotUndefined(''));
  });
});
