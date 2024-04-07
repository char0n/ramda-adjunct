import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('notAllUnique', function () {
  context('given an array of not unique elements', function () {
    specify('should return true', function () {
      assert.isTrue(RA.notAllUnique([1, 2, 3, 4, 5, 1]));
      assert.isTrue(RA.notAllUnique(['b', 'b', 'b']));
      assert.isTrue(RA.notAllUnique([{}, {}]));
      assert.isTrue(RA.notAllUnique([[1], [1]]));
      assert.isTrue(RA.notAllUnique([undefined, undefined, null]));
    });
  });

  context('given an array of unique elements', function () {
    specify('should return false', function () {
      assert.isFalse(RA.notAllUnique([1, 2, 3, 4, 5, 6]));
      assert.isFalse(RA.notAllUnique(['a', 'b', 'c']));
      assert.isFalse(RA.notAllUnique([{}, { a: 1 }, { b: 2 }]));
      assert.isFalse(RA.notAllUnique([null, undefined, '', 0]));
    });
  });

  context('given an empty array', function () {
    specify('should return false', function () {
      assert.isFalse(RA.notAllUnique([]));
    });
  });

  specify('should support placeholder to specify "gaps"', function () {
    const notAllUnique = RA.notAllUnique(R.__);

    assert.isTrue(notAllUnique([1, 2, 3, 4, 5, 1]));
  });
});
