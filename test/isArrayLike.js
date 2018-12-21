import * as R from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';

describe('isArrayLike', function() {
  it('should return true for Arrays', function() {
    eq(RA.isArrayLike([]), true);
    eq(RA.isArrayLike([1, 2, 3, 4]), true);
    eq(RA.isArrayLike([null]), true);
  });

  it('should return true for arguments', function() {
    function testingFn() {
      return RA.isArrayLike(arguments);
    }
    eq(testingFn(), true);
    eq(testingFn(1, 2, 3), true);
    eq(testingFn(null), true);
  });

  it('should return false for Strings', function() {
    eq(RA.isArrayLike(''), false);
    eq(RA.isArrayLike('abcdefg'), false);
  });

  context('given extreme indices are defined', function() {
    specify(
      'should return true for arbitrary objects with numeric length',
      function() {
        const obj1 = { length: 0 };
        const obj2 = { 0: 'something', length: 0 };
        const obj3 = { 0: void 0, length: 0 };
        const obj4 = { 0: 'zero', 1: 'one', length: 2 };
        const obj5 = { nodeType: 1, length: 2 };
        const obj6 = { 0: 'zero', length: 2 };
        const obj7 = { 1: 'one', length: 2 };

        eq(RA.isArrayLike(obj1), true);
        eq(RA.isArrayLike(obj2), true);
        eq(RA.isArrayLike(obj3), true);
        eq(RA.isArrayLike(obj4), true);
        eq(RA.isArrayLike(obj5), true);
        eq(RA.isArrayLike(obj6), false);
        eq(RA.isArrayLike(obj7), false);
      }
    );
  });

  it('should return false for everything else', function() {
    eq(RA.isArrayLike(undefined), false);
    eq(RA.isArrayLike(1), false);
    eq(RA.isArrayLike({}), false);
    eq(RA.isArrayLike(false), false);
    eq(RA.isArrayLike(function() {}), false);
  });

  it('should support placeholder to specify "gaps"', function() {
    const isArrayLike = RA.isArrayLike(R.__);

    eq(isArrayLike([]), true);
  });
});
