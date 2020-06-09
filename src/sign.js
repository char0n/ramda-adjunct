import { bind, curryN } from 'ramda';

import isFunction from './isFunction';
import ponyfill from './internal/ponyfills/Math.sign';

export const signPonyfill = curryN(1, ponyfill);

/**
 * Returns the sign of a number, indicating whether the number is positive, negative or zero.
 *
 * @func sign
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.15.0|v2.15.0}
 * @category Math
 * @sig Number | String -> Number
 * @param {number} number A number
 * @return {number} A number representing the sign of the given argument. If the argument is a positive number, negative number, positive zero or negative zero, the function will return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned
 * @example
 *
 * RA.sign(3); //  1
 * RA.sign(-3); // -1
 * RA.sign('-3'); // -1
 * RA.sign(0); //  0
 * RA.sign(-0); // -0
 * RA.sign(NaN); // NaN
 * RA.sign('foo'); // NaN
 */

const sign = isFunction(Math.sign)
  ? curryN(1, bind(Math.sign, Math))
  : signPonyfill;

export default sign;
