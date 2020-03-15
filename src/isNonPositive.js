import { both, lte, flip, curryN } from 'ramda';

import isNumber from './isNumber';

/**
 * Checks if value is a non-positive `Number` primitive or object. This includes all negative
 * numbers and zero.
 *
 * @func isNonPositive
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNegative|isNegative}, {@link RA.isNonNegative|isNonNegative}
 * @example
 *
 * RA.isNonPositive(0); // => true
 * RA.isNonPositive(-1); // => true
 * RA.isNonPositive(-Infinity); // => true
 * RA.isNonPositive(Number.MIN_VALUE); // => true
 *
 * RA.isNonPositive(Infinity); // => false
 * RA.isNonPositive(Number.MAX_VALUE); // => false
 * RA.isNonPositive(NaN); // => false
 */
const isNonPositive = curryN(1, both(isNumber, flip(lte)(0)));

export default isNonPositive;
