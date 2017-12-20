import { complement } from 'ramda';
import isValidNumber from './isValidNumber';

/* eslint-disable max-len */
/**
 * Checks if value is not a valid `Number` object or is `NaN`,
 * `Number.POSITIVE_INFINITY` or `Number.NEGATIVE_INFINITY`.
 *
 * @func isNotValidNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/X.X.X|vX.X.X}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 * RA.isNotValidNumber(1); //=> false
 * RA.isNotValidNumber(''); //=> true
 */
/* eslint-enable max-len */
const isNotValidNumber = complement(isValidNumber);

export default isNotValidNumber;
