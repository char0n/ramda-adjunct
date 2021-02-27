import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import BigInt from './shared/BigInt';

describe('isPrimitive', function () {
  context('given a primitive value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isPrimitive(3));
      assert.isTrue(RA.isPrimitive(''));
      assert.isTrue(RA.isPrimitive(true));
      assert.isTrue(RA.isPrimitive(null));
      assert.isTrue(RA.isPrimitive(undefined));
      assert.isTrue(RA.isPrimitive(Symbol.for('')));
      if (BigInt !== undefined) {
        assert.isTrue(RA.isPrimitive(BigInt(1234)));
      }
    });
  });

  context('given a non-primitive value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPrimitive([]));
      assert.isFalse(RA.isPrimitive({}));
      assert.isFalse(RA.isPrimitive(() => {}));
      assert.isFalse(RA.isPrimitive(new Set()));
      assert.isFalse(RA.isPrimitive(new Number(12)));
      assert.isFalse(RA.isPrimitive(new String('')));
      assert.isFalse(RA.isPrimitive(new Map()));
      assert.isFalse(RA.isPrimitive(/my regex/gi));
      assert.isFalse(RA.isPrimitive(new Error()));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isPrimitive = RA.isPrimitive(R.__);

    assert.isTrue(isPrimitive(1));
  });
});
