import { curry } from 'ramda';

/**
 * Returns the second argument if predicate function returns `true`,
 * otherwise the third argument is returned.
 *
 * @func defaultWhen
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.2.0|v2.2.0}
 * @category Logic
 * @sig  (a -> Boolean) -> b -> a -> a | b
 * @param {!function} predicate The predicate function
 * @param {*} defaultVal The default value
 * @param {*} val `val` will be returned instead of `defaultVal` if predicate returns false
 * @return {*} The `val` if predicate returns `false`, otherwise the default value
 * @see {@link http://ramdajs.com/docs/#defaultTo|R.defaultTo}
 * @example
 *
 * RA.defaultWhen(RA.isNull, 1, null); // => 1
 * RA.defaultWhen(RA.isNull, 1, 2); // => 2
 */
const defaultWhen = curry(
  (predicate, defaultVal, val) => (predicate(val) ? defaultVal : val)
);

export default defaultWhen;
