import { assert } from 'chai';

import * as RA from '../src';

describe('flattenDepth', function () {
  context('given a list that has nested elements', function () {
    context('and the depth is positive integer number', function () {
      specify('should flatten the list according the the depth', function () {
        const depth = 2;
        const actual = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
        const expected = [1, 2, 3, 4, 5, 6, [[7], 8], 9, 10];

        assert.deepEqual(RA.flattenDepth(depth, actual), expected);
      });
    });

    context('and the depth is negative integer number', function () {
      specify('should return shallow copy of the list', function () {
        const depth = -2;
        const actual = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
        const expected = RA.flattenDepth(depth, actual);

        assert.deepEqual(actual, expected);
        assert.notStrictEqual(actual, expected);
      });
    });

    context('and the depth is 0', function () {
      specify('should return shallow copy of the list', function () {
        const depth = 0;
        const actual = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
        const expected = RA.flattenDepth(depth, actual);

        assert.deepEqual(actual, expected);
        assert.notStrictEqual(actual, expected);
      });
    });

    context('and the depth is arbitrary positive integer number', function () {
      specify('should flatten list', function () {
        const list = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];

        assert.deepEqual(RA.flattenDepth(1, list), [
          1,
          2,
          3,
          [4, 5],
          6,
          [[[7], 8]],
          9,
          10,
        ]);
        assert.deepEqual(RA.flattenDepth(2, list), [
          1,
          2,
          3,
          4,
          5,
          6,
          [[7], 8],
          9,
          10,
        ]);
        assert.deepEqual(RA.flattenDepth(3, list), [
          1,
          2,
          3,
          4,
          5,
          6,
          [7],
          8,
          9,
          10,
        ]);
        assert.deepEqual(
          RA.flattenDepth(4, list),
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        );
        assert.deepEqual(
          RA.flattenDepth(5, list),
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        );
      });
    });

    context('and the depth is positive float number', function () {
      specify('should ceil depth to positive integer number', function () {
        const depth = 2.2;
        const actual = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
        const expected = [1, 2, 3, 4, 5, 6, [7], 8, 9, 10];

        assert.deepEqual(RA.flattenDepth(depth, actual), expected);
      });
    });

    context('and the depth is negative float number', function () {
      specify('should return shallow copy of the list', function () {
        const depth = -2.2;
        const actual = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
        const expected = RA.flattenDepth(depth, actual);

        assert.deepEqual(actual, expected);
        assert.notStrictEqual(actual, expected);
      });
    });
  });

  it('should curry', function () {
    assert.deepEqual(RA.flattenDepth(0, []), []);
    assert.deepEqual(RA.flattenDepth(0)([]), []);
  });
});
