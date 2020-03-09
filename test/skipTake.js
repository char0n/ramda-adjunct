import { assert } from 'chai';
import { range } from 'ramda';

import * as RA from '../src';

describe('skipTake', function() {
  context('given array as input', function() {
    specify('should return a valid array', function() {
      assert.deepEqual(RA.skipTake(2, [1, 2, 3, 4]), [1, 3]);
      assert.deepEqual(RA.skipTake(2)([1, 2, 3, 4]), [1, 3]);
      assert.deepEqual(RA.skipTake(3, range(0, 20)), [0, 3, 6, 9, 12, 15, 18]);
    });
  });
});
