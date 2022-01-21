import { assert } from 'chai';
import * as R from 'ramda';

import { isBlank } from '../src';

describe('isBlank', function () {
  it('should test value for a `Blank`', function () {
    assert.isTrue(isBlank(''));
    assert.isTrue(isBlank('   '));
    assert.isTrue(isBlank('\t\n'));
    assert.isTrue(isBlank({}));
    assert.isTrue(isBlank(null));
    assert.isTrue(isBlank(undefined));
    assert.isTrue(isBlank([]));
    assert.isTrue(isBlank(false));

    assert.isFalse(isBlank('value'));
    assert.isFalse(isBlank({ foo: 'foo' }));
    assert.isFalse(isBlank([1, 2, 3]));
    assert.isFalse(isBlank(true));
  });

  it('should support placeholder to specify "gaps"', function () {
    const _isBlank = isBlank(R.__);

    assert.isTrue(_isBlank(''));
  });
});
