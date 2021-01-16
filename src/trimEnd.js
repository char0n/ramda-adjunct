import { invoker } from 'ramda';

import ponyfill from './internal/ponyfills/String.trimEnd';
import isFunction from './isFunction';

export const trimEndPonyfill = ponyfill;

export const trimEndInvoker = invoker(0, 'trimEnd');

/**
 * Removes whitespace from the end of a string.
 *
 * @func trimEnd
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category String
 * @sig String -> String
 * @param {string} value String value to have the whitespace removed from the end
 * @return {string} A new string representing the calling string stripped of whitespace from its end (right end).
 * @see {@link RA.trimEnd|trimEnd}
 * @example
 *
 * RA.trimEnd('abc   '); //=> 'abc'
 */

const trimEnd = isFunction(String.prototype.trimEnd)
  ? trimEndInvoker
  : trimEndPonyfill;

export default trimEnd;
