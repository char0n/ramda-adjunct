import { curryN } from 'ramda';

import isFunction from './isFunction';
import ponyfill from './internal/ponyfills/String.matchAll';

export const matchAllPonyfill = curryN(2, ponyfill);

export const matchAllInvoker = curryN(2, (reg, str) => [...str.matchAll(reg)]);

/**
 * Match all substring in a string.
 *
 * @func matchAll
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.29.0|v2.29.0}
 * @category String
 * @sig String -> String -> String
 * @param {string} searchValue The substring or a global RegExp to match
 * @param {string} str The String to do the search
 * @return {string[][]} Arrays of found substrings + index, groups, input
 * @throws {TypeError} When invalid arguments provided
 * @see {@link https://github.com/tc39/proposal-string-matchall|TC39 proposal}
 * @example
 *
 * RA.matchAll('ac', 'ac ab ac ab');
 * //=> [['ac'], ['ac'], ['ac']] (Arrays with "index", "input", "groups" props)
 * RA.matchAll(/x/g, 'xxx');
 * //=> [['x'], ['x'], ['x']] (Arrays with "index", "input", "groups" props)
 */

const matchAll = isFunction(String.prototype.matchAll)
  ? matchAllInvoker
  : matchAllPonyfill;

export default matchAll;
