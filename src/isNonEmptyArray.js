import { both } from 'ramda';

import isNotEmpty from './isNotEmpty';
import isArray from './isArray';

/**
 * Checks if input value is not an empty `Array`.
 *
 * @func isNonEmptyArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isEmptyArray|isEmptyArray}
 * @example
 *
 * RA.isNonEmptyArray([42]); // => true
 * RA.isNonEmptyArray([]); // => false
 * RA.isNonEmptyArray({}); // => false
 * RA.isNonEmptyArray(null); // => false
 * RA.isNonEmptyArray(undefined); // => false
 * RA.isNonEmptyArray(42); // => false
 * RA.isNonEmptyArray('42'); // => false
 */
const isNonEmptyArray = both(isArray, isNotEmpty);

export default isNonEmptyArray;
