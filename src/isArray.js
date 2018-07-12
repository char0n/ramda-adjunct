import curry1 from 'ramda/src/internal/_curry1';
import _isArray from 'ramda/src/internal/_isArray';

import isFunction from './isFunction';

/**
 * Checks if input value is `Array`.
 *
 * @func isArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotArray|isNotArray}
 * @example
 *
 * RA.isArray([]); //=> true
 * RA.isArray(null); //=> false
 * RA.isArray({}); //=> false
 */
const isArray = curry1(isFunction(Array.isArray) ? Array.isArray : _isArray);

export default isArray;
