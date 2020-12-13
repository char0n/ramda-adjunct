import { invoker } from 'ramda';

import ponyfill from './internal/ponyfills/String.trimStart';
import isFunction from './isFunction';

export const trimStartPonyfill = ponyfill;

export const trimStartInvoker = invoker(0, 'trimStart');

/**
 * Removes whitespace from the beginning of a string.
 *
 * @func trimStart
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category String
 * @sig String -> String
 * @param {string} value String value to have the whitespace removed from the beginning
 * @return {string} A new string representing the calling string stripped of whitespace from its beginning (left end).
 * @example
 *
 * RA.trimStart('  abc'); //=> 'abc'
 */

const trimStart = isFunction(String.prototype.trimStart)
  ? trimStartInvoker
  : trimStartPonyfill;

export default trimStart;
