import { contains, curry, addIndex, reject } from 'ramda';

// helpers
const rejectIndexed = addIndex(reject);
const containsIndex = curry((indexes, val, index) => contains(index, indexes));

/**
 * Returns a partial copy of an array omitting the indexes specified.
 *
 * @func omitIndexes
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category List
 * @sig [Int] -> [a] -> [a]
 * @see {@link http://ramdajs.com/docs/#omit|R.omit}, {@link RA.pickIndexes|pickIndexes}
 * @param {!Array} indexes The array of indexes to omit from the new array
 * @param {!Array} list The array to copy from
 * @return {!Array} The new array with omitted indexes
 * @example
 *
 * RA.omitIndexes([-1, 1, 3], ['a', 'b', 'c', 'd']); //=> ['a', 'c']
 */
const omitIndexes = curry((indexes, list) =>
  rejectIndexed(containsIndex(indexes), list)
);

export default omitIndexes;
