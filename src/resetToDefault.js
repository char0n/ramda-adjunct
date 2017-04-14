import { merge, flip, curryN } from 'ramda';

/**
 * Reset properties of the object to their default values.
 *
 * @func resetToDefault
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.2.0|v1.2.0}
 * @category Object
 * @sig
 *
 * DefaultOptions -> Options -> Defaults
 *       DefaultOptions = Object
 *       Options = Object
 *       Defaults = Object
 *
 * @param {Object} defaultOptions The default options
 * @param {Object} options The options passed
 * @return {!Object} Merged option object
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#set-properties-only-if-they-dont-exist|Ramda Cookbook}, {@link defaults|defaults}
 * @example
 *
 * RA.resetToDefault({ 'a': 1 }, { 'a': 2, 'b': 2 }); //=> { 'a': 1, 'b': 2 }
 */
const resetToDefault = curryN(2, flip(merge));

export default resetToDefault;
