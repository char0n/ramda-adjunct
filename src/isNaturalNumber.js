import { both, complement, curryN } from 'ramda';

import isInteger from './isInteger';
import isNegative from './isNegative';

/**
 * Checks if value is a isNaturalNumber.
 *
 * @func isNaturalNumber
 * @memberOf RA
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isNaturalNumber(5); // => true
 * RA.isNaturalNumber(Number.MAX_VALUE); // => true
 * RA.isNaturalNumber(0); // => true
 * RA.isNaturalNumber(-1); // => false
 * RA.isNaturalNumber(0.9); // => false
 */

const isNaturalNumber = curryN(1, both(isInteger, complement(isNegative)));

export default isNaturalNumber;
