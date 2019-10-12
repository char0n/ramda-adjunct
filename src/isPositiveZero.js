import { identical } from 'ramda';

/**
 * Checks if value is a positive zero (+0).
 *
 * @func isPositiveZero
 * @memberof RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNegativeZero|isNegativeZero}
 * @example
 *
 * RA.isPositiveZero(+0); //=> true
 * RA.isPositiveZero(0); //=> true
 * RA.isPositiveZero(-0); //=> false
 * RA.isPositiveZero(null); //=> false
 */
const isPositiveZero = identical(+0);

export default isPositiveZero;
