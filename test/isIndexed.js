import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isIndexed', function () {
  context('given a `String` value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isIndexed('test'));
      assert.isTrue(RA.isIndexed(Object('test')));
      assert.isTrue(RA.isIndexed(''));
    });
  });

  context('given array value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isIndexed([]));
      assert.isTrue(RA.isIndexed([1, 2]));
    });
  });

  context('given a non `String` or `Array` value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isIndexed(true));
      assert.isFalse(RA.isIndexed(new Date()));
      assert.isFalse(RA.isIndexed(new Error()));
      assert.isFalse(RA.isIndexed({ 0: 1, length: 1 }));
      assert.isFalse(RA.isIndexed(1));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isIndexed = RA.isIndexed(R.__);

    assert.isTrue(isIndexed([]));
  });
});
