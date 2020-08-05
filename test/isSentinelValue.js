import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('isSentinelValue', function () {
  context('given a sentinel value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isSentinelValue(-1));
      assert.isTrue(RA.isSentinelValue('-1'));
    });
  });

  context('given a non-sentinel value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isSentinelValue(0));
      assert.isFalse(RA.isSentinelValue(1));
      assert.isFalse(RA.isSentinelValue(2));
      assert.isFalse(RA.isSentinelValue(true));
      assert.isFalse(RA.isSentinelValue(false));
      assert.isFalse(RA.isSentinelValue({}));
      assert.isFalse(RA.isSentinelValue([]));
      assert.isFalse(RA.isSentinelValue(() => {}));
      assert.isFalse(RA.isSentinelValue(''));
      assert.isFalse(RA.isSentinelValue('0'));
      assert.isFalse(RA.isSentinelValue('1'));
      assert.isFalse(RA.isSentinelValue('2'));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isSentinelValue = RA.isSentinelValue(R.__);

    assert.isTrue(isSentinelValue(-1));
    assert.isFalse(isSentinelValue(1));
  });
});
