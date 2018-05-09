import { complement } from 'ramda';

import isNumber from './isNumber';

/**
 * Checks if value is a complement of `Number` primitive or object.
 *
 * @func isNotNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNumber|isNumber}
 * @example
 *
 * RA.isNotNumber(5); // => false
 * RA.isNotNumber(Number.MAX_VALUE); // => false
 * RA.isNotNumber(-Infinity); // => false
 * RA.isNotNumber('5'); // => true
 */
const isNotNumber = complement(isNumber);

export default isNotNumber;
