import { assert } from 'chai';

import * as RA from '../src';

describe('flattenDepth', function() {
  context('given a list that has nested elements', function() {
    specify(
      'should return a flattened list to the specified depth',
      function() {
        const nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];

        assert.deepEqual(
          [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10],
          RA.flattenDepth(-1, nest)
        );
        assert.deepEqual(
          [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10],
          RA.flattenDepth(0, nest)
        );
        assert.deepEqual(
          [1, 2, 3, [4, 5], 6, [[[7], 8]], 9, 10],
          RA.flattenDepth(1, nest)
        );
        assert.deepEqual(
          [1, 2, 3, 4, 5, 6, [[7], 8], 9, 10],
          RA.flattenDepth(2, nest)
        );
        assert.deepEqual(
          [1, 2, 3, 4, 5, 6, [7], 8, 9, 10],
          RA.flattenDepth(3, nest)
        );
        assert.deepEqual(
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          RA.flattenDepth(4, nest)
        );
        assert.deepEqual(
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          RA.flattenDepth(5, nest)
        );

        assert.deepEqual(
          [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10],
          RA.flattenDepth(-1)(nest)
        );
        assert.deepEqual(
          [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10],
          RA.flattenDepth(0)(nest)
        );
        assert.deepEqual(
          [1, 2, 3, [4, 5], 6, [[[7], 8]], 9, 10],
          RA.flattenDepth(1)(nest)
        );
        assert.deepEqual(
          [1, 2, 3, 4, 5, 6, [[7], 8], 9, 10],
          RA.flattenDepth(2)(nest)
        );
        assert.deepEqual(
          [1, 2, 3, 4, 5, 6, [7], 8, 9, 10],
          RA.flattenDepth(3)(nest)
        );
        assert.deepEqual(
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          RA.flattenDepth(4)(nest)
        );
        assert.deepEqual(
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          RA.flattenDepth(5)(nest)
        );
      }
    );
  });
});
