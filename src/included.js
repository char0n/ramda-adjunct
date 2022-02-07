import { flip, includes } from 'ramda';

/**
 * Returns true if the specified value is equal, in R.equals terms,
 * to at least one element of the given list or false otherwise.
 * Given list can be a string.
 *
 * Like {@link http://ramdajs.com/docs/#includes|R.includes} but with argument order reversed.
 *
 * @func included
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/3.0.0|v3.0.0}
 * @category List
 * @sig [a] -> a -> Boolean
 * @param {Array|String} list The list to consider
 * @param {*} a The item to compare against
 * @return {boolean} Returns Boolean `true` if an equivalent item is in the list or `false` otherwise
 * @see {@link http://ramdajs.com/docs/#includes|R.includes}
 * @example
 *
 * RA.included([1, 2, 3], 3); //=> true
 * RA.included([1, 2, 3], 4); //=> false
 * RA.included([{ name: 'Fred' }], { name: 'Fred' }); //=> true
 * RA.included([[42]], [42]); //=> true
 */
const included = flip(includes);

export default included;
