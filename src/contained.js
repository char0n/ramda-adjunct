import { flip, contains } from 'ramda';

/**
 * Returns true if the specified value is equal, in R.equals terms,
 * to at least one element of the given list or false otherwise.
 * Given list can be a string.
 *
 * Like {@link http://ramdajs.com/docs/#contains|R.contains} but with argument order reversed.
 *
 * @func contained
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig [a] -> a -> Boolean
 * @param {Array|String} list The list to consider
 * @param {*} a The item to compare against
 * @return {boolean} Returns Boolean `true` if an equivalent item is in the list or `false` otherwise
 * @see {@link http://ramdajs.com/docs/#contains|R.contains}
 * @example
 *
 * RA.contained([1, 2, 3], 3); //=> true
 * RA.contained([1, 2, 3], 4); //=> false
 * RA.contained([{ name: 'Fred' }], { name: 'Fred' }); //=> true
 * RA.contained([[42]], [42]); //=> true
 */
const contained = flip(contains);

export default contained;
