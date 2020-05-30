import { curryN } from 'ramda';

/**
 * Converts the value to an unsigned 32-bit integer number
 *
 * @func toUinteger32
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.28.0|v2.28.0}
 * @category Math
 * @sig * -> Number
 * @param {*} val Value to be converted
 * @return {Number}
 * @example
 *
 * RA.toUinteger32(1.5); //=> 1
 * RA.toUinteger32(9876.543210); //=> 9876
 * RA.toUinteger32('12.56'); //=> 12
 * RA.toUinteger32(-1); //=> 4294967295
 * RA.toUinteger32(-1.5); //=> 4294967295
 * RA.toUinteger32(0); //=> 0
 */

/* eslint no-bitwise: ["error", { "allow": [">>>"] }] */
const toUinteger32 = curryN(1, (val) => val >>> 0);

export default toUinteger32;
