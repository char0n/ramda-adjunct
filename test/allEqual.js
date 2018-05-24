import { assert } from 'chai';

import * as RA from '../src/index';

describe('allEqual', function() {
  context('when all items are equal', function() {
    specify('returns true', function() {
      assert.isTrue(RA.allEqual([4, 4, 4, 4]));
    });
  });

  context('when all items are deeply equal', function() {
    specify('should return true', function() {
      assert.isTrue(RA.allEqual([{ key: 'foo' }, { key: 'foo' }]));
    });
  });

  context('when items are not equal', function() {
    specify('should return false', function() {
      assert.isFalse(RA.allEqual([1, 1, 2, 1, 1]));
    });
  });

  context('when empty list provided', function() {
    specify('should return true', function() {
      assert.isTrue(RA.allEqual([]));
    });
  });
});
