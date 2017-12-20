import { either } from 'ramda';

import isFloat from './isFloat';
import isInteger from './isInteger';

/* eslint-disable max-len */
/**
 * Checks if value is valid `Number` object and not `NaN`,
 * `INFINITY` or `-INFINITY`.
 *
 * @func isValidNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/X.X.X|vX.X.X}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 * RA.isValidNumber(1); //=> true
 * RA.isValidNumber(''); //=> false
 */
/* eslint-enable max-len */
const isValidNumber = either(isInteger, isFloat);

export default isValidNumber;
