import { addIndex, filter } from 'ramda';

/**
 * const filterIndexed = R.addIndex(R.filter);
 *
 * @func filterIndexed
 *
 * @typedef Idx = Number
 * @param {Function} fn The predicate function
 * @param {Array} list the list to filter
 * @param {*} val
 * @return {Array} A filterable containing the value at a given index
 * @see {@link http: //ramdajs.com/docs/#addIndex|R.addIndex}, {@link https://ramdajs.com/docs/#filter}
 * @example
 *
 * filterIndexed((val, idx) => idx === 0, [1, 2, 3]); // => [1]
 */

const filterIndexed = addIndex(filter);

export default filterIndexed;
