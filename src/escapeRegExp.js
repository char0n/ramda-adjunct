import { when, replace } from 'ramda';

import isString from './isString';

/**
 * Escapes the RegExp special characters.
 *
 * @func escapeRegExp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.21.0|v2.21.0}
 * @category String
 * @sig String -> String
 * @param {string} val the value to escape
 * @return {string}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping|MDN Regular Expressions Escaping}
 * @example
 *
 * RA.escapeRegExp('[ramda-adjunct](https://github.com/char0n/ramda-adjunct)'); //=> '\[ramda\-adjunct\]\(https://github\.com/char0n/ramda\-adjunct\)'
 */
const escapeRegExp = when(isString, replace(/[.*+?^${}()|[\]\\-]/g, '\\$&'));

export default escapeRegExp;
