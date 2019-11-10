import {
  values,
  both,
  complement,
  pipe,
  converge,
  identical,
  length,
} from 'ramda';

import isArray from './isArray';

/**
 * Checks if input value is a sparse Array.
 * An array with at least one "empty slot" in it is often called a "sparse array."
 * Empty slot doesn't mean that the slot contains `null` or `undefined` values,
 * but rather that the slots don't exist.
 *
 * @func isSparseArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.20.0|v2.20.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} list The list to test
 * @return {boolean}
 * @see {@link https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch3.md#array|Sparse Arrays}, {@link RA.isArray|isArray}
 * @example
 *
 * RA.isSparseArray(new Array(3)); // => true
 * RA.isSparseArray([1,,3]); // => true
 *
 * const list = [1, 2, 3];
 * delete list[1];
 * RA.isSparseArray(list); // => true
 *
 * RA.isSparseArray([1, 2, 3]); // => false
 */
const isSparseArray = both(
  isArray,
  converge(complement(identical), [pipe(values, length), length])
);

export default isSparseArray;
