import { merge } from 'ramda';

/**
 * Set properties only if they don't exist. Useful for passing defaults. Basically this function
 * is the alias of {@link http://ramdajs.com/docs/#merge|merge}.
 *
 * @func defaults
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
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#set-properties-only-if-they-dont-exist|Ramda Cookbook}, {@link http://ramdajs.com/docs/#merge|merge}
 * @example
 *
 * RA.defaults({ 'a': 2, 'b': 2 })({ 'a': 1 }); //=> { 'a': 1, 'b': 2 }
 */
const defaults = merge;

export default defaults;
