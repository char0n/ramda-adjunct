import { bind, curryN } from 'ramda';

import isFunction from './isFunction';
import polyfill from './internal/polyfills/Number.isFinite';

export const isFinitePolyfill = curryN(1, polyfill);

/**
 * Checks whether the passed value is a finite `Number`.
 *
 * @func isFinite
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotFinite|isNotFinite}
 * @example
 *
 * RA.isFinite(Infinity); //=> false
 * RA.isFinite(NaN); //=> false
 * RA.isFinite(-Infinity); //=> false
 *
 * RA.isFinite(0); // true
 * RA.isFinite(2e64); // true
 *
 * RA.isFinite('0');  // => false
 *                    // would've been true with global isFinite('0')
 * RA.isFinite(null); // => false
 *                    // would've been true with global isFinite(null)
 */
const _isFinite = isFunction(Number.isFinite)
  ? curryN(1, bind(Number.isFinite, Number))
  : isFinitePolyfill;

export default _isFinite;
