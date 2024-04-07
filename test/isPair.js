import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isPair', function () {
  context('given a pair value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isPair([0, 1]));
    });
  });

  context('given a non pair value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPair([]));
      assert.isFalse(RA.isPair([0]));
      assert.isFalse(RA.isPair([0, 1, 2]));
      assert.isFalse(RA.isPair(0));
      assert.isFalse(RA.isPair(''));
      assert.isFalse(RA.isPair('foo'));
      assert.isFalse(RA.isPair(false));
      assert.isFalse(RA.isPair(true));
      assert.isFalse(RA.isPair(new Date()));
      assert.isFalse(RA.isPair({ 0: 0, 1: 1 }));
      assert.isFalse(RA.isPair({ foo: 0, bar: 1 }));
      assert.isFalse(RA.isPair(Symbol));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isPair = RA.isPair(R.__);

    assert.isTrue(isPair([0, 1]));
  });
});
