import { curryN } from 'ramda';

import toInteger32 from './toInteger32';

/**
 * Checks whether the passed value is a 32 bit integer.
 *
 * @func isFinite
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.32.0|v2.32.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isInteger32|isInteger32}
 * @example
 *
 * RA.isInteger32(0); //=> true
 * RA.isInteger32((-2) ** 31); //=> true
 *
 * RA.isInteger32(Infinity); //=> false
 * RA.isInteger32(NaN); //=> false
 * RA.isInteger32(2 ** 31); //=> false
 */
const _isInteger32 = curryN(1, (val) => toInteger32(val) === val);

export default _isInteger32;
