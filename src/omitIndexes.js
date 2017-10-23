import { reject, addIndex, curryN, contains } from 'ramda';

/**
 * Returns a partial copy of an array omitting the indexes specified.
 *
 * @func omitIndexes
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.1|v1.18.1}
 * @category List
 * @sig [i] -> [a] -> [a]
 * @see {@link http://ramdajs.com/docs/#omit|omit}
 * @param {!Array} indexes The array of indexes to omit from the new array
 * @param {!Array} list The array to copy from
 * @return {!Array} The new array with indexes not on it
 * @example
 *
 * RA.omitIndexes([-1, 1, 3], ['a', 'b', 'c', 'd']); //=> ['a', 'c']
 */
const indexedReject = addIndex(reject);

const omitIndexes = curryN(2, (indexes, list) => {
  const rejectIndexes = (_, i) => contains(i, indexes);
  return indexedReject(rejectIndexes, list);
});

export default omitIndexes;
