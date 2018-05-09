import { allPass } from 'ramda';

import isString from './isString';
import isNotObj from './isNotObj';
import isNotEmpty from './isNotEmpty';

/**
 * Checks if input value is not an empty `String`.
 *
 * @func isNonEmptyString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isEmptyString|isEmptyString}
 * @example
 *
 * RA.isNonEmptyString('42'); // => true
 * RA.isNonEmptyString(''); // => false
 * RA.isNonEmptyString(new String('42')); // => false
 * RA.isNonEmptyString(new String('')); // => false
 * RA.isNonEmptyString([42]); // => false
 * RA.isNonEmptyString({}); // => false
 * RA.isNonEmptyString(null); // => false
 * RA.isNonEmptyString(undefined); // => false
 * RA.isNonEmptyString(42); // => false
 */
const isNonEmptyString = allPass([isString, isNotObj, isNotEmpty]);

export default isNonEmptyString;
