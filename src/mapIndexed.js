import { addIndex, map } from 'ramda';

/**
 * {@link http://ramdajs.com/docs/#map|R.map} function that more closely resembles Array.prototype.map.
 * It takes two new parameters to its callback function: the current index, and the entire list.
 *
 * `mapIndexed` implementation is simple : `
 * const mapIndexed = R.addIndex(R.map);
 * `
 * @func mapIndexed
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category List
 * @typedef Idx = Number
 * @sig Functor f => ((a, Idx, f a) => b) => f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`
 * @param {Array} list The list to be iterated over
 * @return {Array} The new list
 * @see {@link http://ramdajs.com/docs/#addIndex|R.addIndex}, {@link http://ramdajs.com/docs/#map|R.map}
 * @example
 *
 * RA.mapIndexed((val, idx, list) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 * //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
const mapIndexed = addIndex(map);

export default mapIndexed;
