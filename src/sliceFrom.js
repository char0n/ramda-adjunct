import { __, slice } from 'ramda';

/**
 * Returns the elements of the given list or string (or object with a slice method)
 * from fromIndex (inclusive).
 * Dispatches to the slice method of the second argument, if present.
 *
 * @func sliceFrom
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.16.0|v1.16.0}
 * @category List
 * @sig  Number -> [a] -> [a]
 * @param {number} fromIndex The start index (inclusive)
 * @param {Array|string} list The list or string to slice
 * @return {Array|string} The sliced list or string
 * @see {@link http://ramdajs.com/docs/#slice|R.slice}, {@link RA.sliceTo|sliceTo}
 * @example
 *
 * RA.sliceFrom(1, [1, 2, 3]); //=> [2, 3]
 */
const sliceFrom = slice(__, Infinity);

export default sliceFrom;
