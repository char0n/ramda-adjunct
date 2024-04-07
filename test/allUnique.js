import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('allUnique', function () {
  context('given an array of unique elements', function () {
    specify('should return true', function () {
      assert.isTrue(RA.allUnique([1, 2, 3, 4, 5, 6]));
      assert.isTrue(RA.allUnique(['a', 'b', 'c']));
      assert.isTrue(RA.allUnique([{}, { a: 1 }, { b: 2 }]));
      assert.isTrue(RA.allUnique([null, undefined, '', 0]));
    });
  });

  context('given an array of not unique elements', function () {
    specify('should return false', function () {
      assert.isFalse(RA.allUnique([1, 2, 3, 4, 5, 1]));
      assert.isFalse(RA.allUnique(['b', 'b', 'c']));
      assert.isFalse(RA.allUnique([{}, {}]));
      assert.isFalse(RA.allUnique([[1], [1]]));
      assert.isFalse(RA.allUnique([undefined, undefined, undefined]));
    });
  });

  context('given an empty array', function () {
    specify('should return true', function () {
      assert.isTrue(RA.allUnique([]));
    });
  });

  specify('should support placeholder to specify "gaps"', function () {
    const allUnique = RA.allUnique(R.__);

    assert.isTrue(allUnique([1, 2, 3, 4, 5, 6]));
  });
});
