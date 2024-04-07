import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('isArrayLike', function () {
  context('given array', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotArrayLike([]));
      assert.isFalse(RA.isNotArrayLike([1, 2, 3, 4]));
      assert.isFalse(RA.isNotArrayLike([null]));
    });
  });

  context('given arguments object', function () {
    specify('should return false', function () {
      function testingFn() {
        return RA.isNotArrayLike(arguments);
      }
      assert.isFalse(testingFn());
      assert.isFalse(testingFn(1, 2, 3));
      assert.isFalse(testingFn(null));
    });
  });

  context('given string', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotArrayLike(''));
      assert.isTrue(RA.isNotArrayLike('abcdefg'));
    });
  });

  context('given arbitrary objects with numeric length', function () {
    context('and extreme indices are defined', function () {
      const obj1 = { length: 0 };
      const obj2 = { 0: 'something', length: 0 };
      const obj3 = { 0: void 0, length: 0 };
      const obj4 = { 0: 'zero', 1: 'one', length: 2 };
      const obj5 = { 0: 'zero', length: 2 };
      const obj6 = { 1: 'one', length: 2 };

      assert.isFalse(RA.isNotArrayLike(obj1));
      assert.isFalse(RA.isNotArrayLike(obj2));
      assert.isFalse(RA.isNotArrayLike(obj3));
      assert.isFalse(RA.isNotArrayLike(obj4));

      assert.isTrue(RA.isNotArrayLike(obj5));
      assert.isTrue(RA.isNotArrayLike(obj6));
    });
  });

  context('given array like value or anything else', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotArrayLike(undefined));
      assert.isTrue(RA.isNotArrayLike(1));
      assert.isTrue(RA.isNotArrayLike({}));
      assert.isTrue(RA.isNotArrayLike(false));
      assert.isTrue(RA.isNotArrayLike(function () {}));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotArrayLike = RA.isNotArrayLike(R.__);

    assert.isTrue(isNotArrayLike(-1));
  });
});
