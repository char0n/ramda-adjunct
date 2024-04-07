import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isNotPair', function () {
  context('given a non pair value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotPair([]));
      assert.isTrue(RA.isNotPair([0]));
      assert.isTrue(RA.isNotPair([0, 1, 2]));
      assert.isTrue(RA.isNotPair(0));
      assert.isTrue(RA.isNotPair(''));
      assert.isTrue(RA.isNotPair('foo'));
      assert.isTrue(RA.isNotPair(false));
      assert.isTrue(RA.isNotPair(true));
      assert.isTrue(RA.isNotPair(new Date()));
      assert.isTrue(RA.isNotPair({ 0: 0, 1: 1 }));
      assert.isTrue(RA.isNotPair({ foo: 0, bar: 1 }));
      assert.isTrue(RA.isNotPair(Symbol));
    });
  });

  context('given a pair value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotPair([0, 1]));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotPair = RA.isNotPair(R.__);

    assert.isTrue(isNotPair(null));
  });
});
