import { filter, addIndex, curry, contains } from 'ramda';

// helpers
const filterIndexed = addIndex(filter);
const containsIndex = curry((indexes, val, index) => contains(index, indexes));

/**
 * Picks values from list by indexes.
 *
 * @func pickIndexes
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.1.0|v1.1.0}
 * @category List
 * @sig  [Number] -> [a] -> [a]
 * @param {Array} indexes The indexes to pick
 * @param {Array} list The list to pick values from
 * @return {Array} New array containing only values at `indexes`
 * @see {@link http://ramdajs.com/docs/#pick|R.pick}, {@link RA.omitIndexes|omitIndexes}
 * @example
 *
 * RA.pickIndexes([0, 2], ['a', 'b', 'c']); //=> ['a', 'c']
 */
const pickIndexes = curry((indexes, list) =>
  filterIndexed(containsIndex(indexes), list)
);

export default pickIndexes;
