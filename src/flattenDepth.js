import { curry } from 'ramda';
import _makeFlat from 'ramda/src/internal/_makeFlat';

/**
 * Flattens the list to the specified depth.
 *
 * @func flattenDepth
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.19.0|v2.19.0}
 * @category List
 * @sig number -> [a] -> [b]
 * @param {!number} depth The depth it should be flattened to
 * @param {!Array} list The provided list
 * @return {!Array} The flattened list
 * @see {@link http://ramdajs.com/docs/#flatten|R.flatten}, {@link http://ramdajs.com/docs/#unnest|R.unnest}
 * @example
 *
 * RA.flattenDepth(
 *   2,
 *   [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]
 * ); // => [1, 2, 3, 4, 5, 6, [[7], 8], 9, 10];
 */
const flattenDepth = curry((depth, list) => {
  let currentDept = depth;
  let flatList = list;

  while (currentDept > 0) {
    flatList = _makeFlat(false)(flatList);

    currentDept -= 1;
  }

  return flatList;
});

export default flattenDepth;
