import { both, lt } from 'ramda';

import isNumber from './isNumber';

/**
 * Checks if value is a positive `Number` primitive or object. Zero is not considered positive.
 *
 * @func isPositive
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.15.0|v1.15.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNegative|isNegative}
 * @example
 *
 * RA.isPositive(1); // => true
 * RA.isPositive(Number.MAX_VALUE); // => true
 * RA.isPositive(-Infinity); // => false
 * RA.isPositive(NaN); // => false
 * RA.isPositive('5'); // => false
 */
const isPositive = both(isNumber, lt(0));

export default isPositive;
