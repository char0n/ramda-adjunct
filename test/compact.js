import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('compact', function () {
  context('given list contains falsy values', function () {
    specify('should filter them', function () {
      assert.sameOrderedMembers(
        RA.compact([0, 1, false, 2, '', 3, null, undefined, NaN]),
        [1, 2, 3]
      );
    });
  });

  context('given list contains truthy values only', function () {
    specify('should not filter anything', function () {
      assert.sameOrderedMembers(RA.compact([1, 2, 3]), [1, 2, 3]);
    });

    specify('should return new list with exactly same items', function () {
      const list = [1, 2, 3];

      assert.notStrictEqual(RA.compact(list), list);
    });
  });

  context('given empty list', function () {
    specify('should return new empty list', function () {
      const list = [];

      assert.notStrictEqual(RA.compact(list), list);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const compact = RA.compact(R.__);

    assert.sameOrderedMembers(compact([]), []);
  });
});
