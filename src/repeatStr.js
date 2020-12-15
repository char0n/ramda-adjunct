import { curry, invoker, flip } from 'ramda';

import ponyfill from './internal/ponyfills/String.repeat';
import isFunction from './isFunction';

export const repeatStrPonyfill = curry(ponyfill);

export const repeatStrInvoker = flip(invoker(1, 'repeat'));

/**
 * Constructs and returns a new string which contains the specified
 * number of copies of the string on which it was called, concatenated together.
 *
 * @func repeatStr
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.11.0|v2.11.0}
 * @category List
 * @sig String -> Number -> String
 * @param {string} value String value to be repeated
 * @param {number} count An integer between 0 and +∞: [0, +∞), indicating the number of times to repeat the string in the newly-created string that is to be returned
 * @return {string} A new string containing the specified number of copies of the given string
 * @example
 *
 * RA.repeatStr('a', 3); //=> 'aaa'
 */
const repeatStr = isFunction(String.prototype.repeat)
  ? repeatStrInvoker
  : repeatStrPonyfill;

export default repeatStr;
