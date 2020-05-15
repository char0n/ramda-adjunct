import { curry } from 'ramda';

import _makeFlat from './internal/makeFlat';

const flatten1 = _makeFlat(false);

/**
 * Flattens the list to the specified depth.
 *
 * @func flattenDepth
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.19.0|v2.19.0}
 * @category List
 * @sig Number -> [a] -> [b]
 * @param {!number} depth The maximum recursion depth
 * @param {!Array} list The array to flatten
 * @return {!Array} Returns the new flattened array
 * @see {@link http://ramdajs.com/docs/#flatten|R.flatten}, {@link http://ramdajs.com/docs/#unnest|R.unnest}
 * @example
 *
 * RA.flattenDepth(
 *   2,
 *   [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]
 * ); //=> [1, 2, 3, 4, 5, 6, [[7], 8], 9, 10];
 */
const flattenDepth = curry((depth, list) => {
  let currentDept = depth;
  let flatList = [...list];

  while (currentDept > 0) {
    flatList = flatten1(flatList);

    currentDept -= 1;
  }

  return flatList;
});

export default flattenDepth;
