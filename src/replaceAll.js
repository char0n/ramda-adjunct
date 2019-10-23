import { curryN, invoker } from 'ramda';

import isFunction from './isFunction';
import polyfill from './internal/polyfills/String.replaceAll';

export const replaceAllPolyfill = curryN(3, polyfill);

export const replaceAllInvoker = invoker(2, 'replaceAll');

/**
 * Replaces all substring matches in a string with a replacement.
 *
 * @func replaceAll
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.17.0|v2.17.0}
 * @category String
 * @sig String -> String -> String -> String
 * @param {string} searchValue The substring or a global RegExp to match
 * @param {string} replaceValue The string to replace the matches with
 * @param {string} str The String to do the search and replacement in
 * @return {string} A new string containing all the `searchValue` replaced with the `replaceValue`
 * @throws {TypeError} When invalid arguments provided
 * @see {@link http://ramdajs.com/docs/#replace|R.replace}, {@link https://github.com/tc39/proposal-string-replaceall|TC39 proposal}
 * @example
 *
 * RA.replaceAll('ac', 'ef', 'ac ab ac ab'); //=> 'ef ab ef ab'
 * RA.replaceAll('', '_', 'xxx'); //=> '_x_x_x_'
 * RA.replaceAll(/x/g, 'v', 'xxx'); //=> 'vvv'
 * RA.replaceAll(/x/, 'v', 'xxx'); //=> TypeError
 */

const replaceAll = isFunction(String.prototype.replaceAll)
  ? replaceAllInvoker
  : replaceAllPolyfill;

export default replaceAll;
