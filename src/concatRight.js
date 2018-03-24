import { concat, flip } from 'ramda';

/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: R.concat expects both arguments to be of the same type, unlike
 * the native Array.prototype.concat method.
 * It will throw an error if you concat an Array with a non-Array value.
 * Dispatches to the concat method of the second argument, if present.
 *
 * @func concatRight
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.11.0|v1.11.0}
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `secondList`
 * followed by the elements of `firstList`.
 * @see {@link http://ramdajs.com/docs/#concat|R.concat}
 * @example
 *
 * RA.concatRight('ABC', 'DEF'); //=> 'DEFABC'
 * RA.concatRight([4, 5, 6], [1, 2, 3]); //=> [1, 2, 3, 4, 5, 6]
 * RA.concatRight([], []); //=> []
 */
const concatRight = flip(concat);

export default concatRight;
