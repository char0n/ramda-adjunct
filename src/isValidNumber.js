import { either, curryN } from 'ramda';

import isFloat from './isFloat';
import isInteger from './isInteger';

/**
 * Checks if value is a valid `Number`. A valid `Number` is a number that is not `NaN`, `Infinity`
 * or `-Infinity`.
 *
 * @func isValidNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.2.0|v2.2.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotValidNumber|isNotValidNumber}
 * @example
 *
 * RA.isValidNumber(1); //=> true
 * RA.isValidNumber(''); //=> false
 * RA.isValidNumber(NaN); //=> false
 * RA.isValidNumber(Infinity); //=> false
 * RA.isValidNumber(-Infinity); //=> false
 */
const isValidNumber = curryN(1, either(isInteger, isFloat));

export default isValidNumber;
