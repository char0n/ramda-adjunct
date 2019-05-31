import * as RA from '../src';
import eq from './shared/eq';

describe('flattenDepth', function() {
  describe('flattens a nested list the specified depth', function() {
    const nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];

    eq(RA.flattenDepth(-1, nest), [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]);
    eq(RA.flattenDepth(0, nest), [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]);
    eq(RA.flattenDepth(1, nest), [1, 2, 3, [4, 5], 6, [[[7], 8]], 9, 10]);
    eq(RA.flattenDepth(2, nest), [1, 2, 3, 4, 5, 6, [[7], 8], 9, 10]);
    eq(RA.flattenDepth(3, nest), [1, 2, 3, 4, 5, 6, [7], 8, 9, 10]);
    eq(RA.flattenDepth(4, nest), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    eq(RA.flattenDepth(5, nest), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    eq(RA.flattenDepth(-1)(nest), [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]);
    eq(RA.flattenDepth(1)(nest), [1, 2, 3, [4, 5], 6, [[[7], 8]], 9, 10]);
    eq(RA.flattenDepth(2)(nest), [1, 2, 3, 4, 5, 6, [[7], 8], 9, 10]);
    eq(RA.flattenDepth(3)(nest), [1, 2, 3, 4, 5, 6, [7], 8, 9, 10]);
    eq(RA.flattenDepth(4)(nest), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    eq(RA.flattenDepth(5)(nest), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
