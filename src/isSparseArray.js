import curry1 from 'ramda/src/internal/_curry1';

/**
 * Checks if input value is a sparse array: at least one index is missing.
 *
 *
 * @func isSparseArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.20.0|v2.20.0}
 * @category Type
 * @sig Array -> Boolean
 * @param {*} Array The value to test
 * @return {boolean}
 * @example
 *
 * RA.isSparseArray([]); //=> false
 * RA.isSparseArray([1, 2, 3]); //=> false
 * RA.isSparseArray([1, 2, , 3]); //=> true
 */
const isSparseArray = curry1(xs => xs.includes(undefined));

export default isSparseArray;
