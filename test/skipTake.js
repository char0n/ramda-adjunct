import { assert } from 'chai';
import { range } from 'ramda';

import * as RA from '../src/index.js';

describe('skipTake', function () {
  context('given array as input', function () {
    specify('should return a valid array', function () {
      assert.deepEqual(RA.skipTake(3, range(0, 20)), [0, 3, 6, 9, 12, 15, 18]);
    });
  });

  context('given empty array as input', function () {
    specify('should return an empty array', function () {
      assert.deepEqual(RA.skipTake(3, []), []);
    });
  });

  context('given negative count as input', function () {
    specify('should return an empty array', function () {
      assert.deepEqual(RA.skipTake(-1, []), []);
    });
  });

  context('given negative count as input and a non empty array', function () {
    specify('should ignore the sign of count', function () {
      assert.deepEqual(RA.skipTake(-2, [1, 2, 3, 4]), [1, 3]);
    });
  });

  context('given first argument is 0', function () {
    specify('should return an empty array', function () {
      assert.deepEqual(RA.skipTake(0, []), []);
    });
  });

  it('should be curried', function () {
    assert.deepEqual(RA.skipTake(2)([1, 2, 3, 4]), [1, 3]);
    assert.deepEqual(RA.skipTake(2, [1, 2, 3, 4]), [1, 3]);
  });
});
