import { both, complement, curryN } from 'ramda';

import isInteger from './isInteger';
import isNegative from './isNegative';

/**
 * Checks if value is a NaturalNumber
 * 
 * @func isNaturalNumber
 * @memberOf RA
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 * 
 * RA.isNaturalNumber(1); // => true
 * RA.isNaturalNumber(0); // => true
 * RA.isNaturalNumber(-1); // => false
 * RA.isNaturalNumber(0.1); // => false
 */

const isNaturalNumber = curryN(1, both(isInteger, complement(isNegative)));

export default isNaturalNumber;
 