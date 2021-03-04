import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import BigInt from './shared/BigInt';
import Symbol from './shared/Symbol';

describe('isNotPrimitive', function () {
  context('given a primitive value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotPrimitive(3));
      assert.isFalse(RA.isNotPrimitive(''));
      assert.isFalse(RA.isNotPrimitive(true));
      assert.isFalse(RA.isNotPrimitive(null));
      assert.isFalse(RA.isNotPrimitive(undefined));
      if (Symbol !== undefined) {
        assert.isFalse(RA.isNotPrimitive(Symbol.for('')));
      }
      if (BigInt !== undefined) {
        assert.isFalse(RA.isNotPrimitive(BigInt(1234)));
      }
    });
  });

  context('given a non-primitive value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotPrimitive([]));
      assert.isTrue(RA.isNotPrimitive({}));
      assert.isTrue(RA.isNotPrimitive(() => {}));
      assert.isTrue(RA.isNotPrimitive(new Set()));
      assert.isTrue(RA.isNotPrimitive(new Number(12)));
      assert.isTrue(RA.isNotPrimitive(new String('')));
      assert.isTrue(RA.isNotPrimitive(new Map()));
      assert.isTrue(RA.isNotPrimitive(/my regex/gi));
      assert.isTrue(RA.isNotPrimitive(new Error()));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotPrimitive = RA.isNotPrimitive(R.__);

    assert.isFalse(isNotPrimitive(1));
  });
});
