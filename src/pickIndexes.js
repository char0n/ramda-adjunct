import { curryN, compose, values, pickAll } from 'ramda';

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
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#pick-values-a-from-list-by-indexes|Ramda Cookbook}, {@link http://ramdajs.com/docs/#props|props}
 * @example
 *
 * RA.pickIndexes([0, 2], ['a', 'b', 'c']); //=> ['a', 'c']
 */
const pickIndexes = curryN(2, compose(values, pickAll));

export default pickIndexes;
