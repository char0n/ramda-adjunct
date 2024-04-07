import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isArrayLike', function () {
  it('should return true for Arrays', function () {
    assert.isTrue(RA.isArrayLike([]));
    assert.isTrue(RA.isArrayLike([1, 2, 3, 4]));
    assert.isTrue(RA.isArrayLike([null]));
  });

  it('should return true for arguments', function () {
    function testingFn() {
      return RA.isArrayLike(arguments);
    }
    assert.isTrue(testingFn());
    assert.isTrue(testingFn(1, 2, 3));
    assert.isTrue(testingFn(null));
  });

  it('should return false for Strings', function () {
    assert.isFalse(RA.isArrayLike(''));
    assert.isFalse(RA.isArrayLike('abcdefg'));
  });

  context('given extreme indices are defined', function () {
    specify(
      'should return true for arbitrary objects with numeric length',
      function () {
        const obj1 = { length: 0 };
        const obj2 = { 0: 'something', length: 0 };
        const obj3 = { 0: void 0, length: 0 };
        const obj4 = { 0: 'zero', 1: 'one', length: 2 };
        const obj5 = { nodeType: 1, length: 2 };
        const obj6 = { 0: 'zero', length: 2 };
        const obj7 = { 1: 'one', length: 2 };

        assert.isTrue(RA.isArrayLike(obj1));
        assert.isTrue(RA.isArrayLike(obj2));
        assert.isTrue(RA.isArrayLike(obj3));
        assert.isTrue(RA.isArrayLike(obj4));
        assert.isTrue(RA.isArrayLike(obj5));
        assert.isFalse(RA.isArrayLike(obj6));
        assert.isFalse(RA.isArrayLike(obj7));
      }
    );
  });

  it('should return false for everything else', function () {
    assert.isFalse(RA.isArrayLike(undefined));
    assert.isFalse(RA.isArrayLike(1));
    assert.isFalse(RA.isArrayLike({}));
    assert.isFalse(RA.isArrayLike(false));
    assert.isFalse(RA.isArrayLike(function () {}));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isArrayLike = RA.isArrayLike(R.__);

    assert.isTrue(isArrayLike([]));
  });
});
