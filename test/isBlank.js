import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('isBlank', function () {
  it('should test value for a `Blank`', function () {
    assert.isTrue(RA.isBlank(''));
    assert.isTrue(RA.isBlank('   '));
    assert.isTrue(RA.isBlank('\t\n'));
    assert.isTrue(RA.isBlank({}));
    assert.isTrue(RA.isBlank(null));
    assert.isTrue(RA.isBlank(undefined));
    assert.isTrue(RA.isBlank([]));
    assert.isTrue(RA.isBlank(false));

    assert.isFalse(RA.isBlank('value'));
    assert.isFalse(RA.isBlank({ foo: 'foo' }));
    assert.isFalse(RA.isBlank([1, 2, 3]));
    assert.isFalse(RA.isBlank(true));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isBlank = RA.isBlank(R.__);

    assert.isTrue(isBlank(''));
  });
});
