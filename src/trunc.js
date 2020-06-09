import { bind, curryN } from 'ramda';

import ponyfill from './internal/ponyfills/Math.trunc';
import isFunction from './isFunction';

export const truncPonyfill = curryN(1, ponyfill);

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @func trunc
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.15.0|v2.15.0}
 * @category Math
 * @sig Number | String -> Number
 * @param {number|string} number The number to trunc
 * @return {number} The integer part of the given number
 * @example
 *
 * RA.trunc(13.37); //=> 13
 * RA.trunc(42.84); //=> 42
 * RA.trunc(0.123); //=>  0
 * RA.trunc(-0.123); //=> -0
 * RA.trunc('-1.123'); //=> -1
 * RA.trunc(NaN); //=> NaN
 * RA.trunc('foo'); //=> NaN
 */

const trunc = isFunction(Math.trunc)
  ? curryN(1, bind(Math.trunc, Math))
  : truncPonyfill;

export default trunc;
