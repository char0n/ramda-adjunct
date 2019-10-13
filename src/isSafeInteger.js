import { bind } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

import isFunction from './isFunction';
import polyfill from './internal/polyfills/Number.isSafeInteger';

export const isSafeIntegerPolyfill = curry1(polyfill);

/**
 * Checks whether the passed value is a safe `integer`.
 *
 * @func isSafeInteger
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isSafeInteger(3); //=> true
 * RA.isSafeInteger(Math.pow(2, 53)) //=> false
 * RA.isSafeInteger(Math.pow(2, 53) - 1); //=> true
 * RA.isSafeInteger(NaN); //=> false
 * RA.isSafeInteger(Infinity); //=> false
 * RA.isSafeInteger('3') //=> false
 * RA.isSafeInteger(3.1); //=> false
 * RA.isSafeInteger(3.0); //=> true
 * RA.isSafeInteger('string'); //=> false
 * RA.isSafeInteger(null); //=> false
 * RA.isSafeInteger(undefined); //=> false
 * RA.isSafeInteger({}); //=> false
 * RA.isSafeInteger(() => { }); //=> false
 * RA.isSafeInteger(true); //=> false
 */

const isSafeInteger = isFunction(Number.isSafeInteger)
  ? curry1(bind(Number.isSafeInteger, Number))
  : isSafeIntegerPolyfill;

export default isSafeInteger;
