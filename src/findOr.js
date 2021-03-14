import { pipe, curry, find, defaultTo } from 'ramda';

/**
 * Returns a value from a list when the given predicate returns true.
 * If the predicate does not match, or the value found is null, undefined, or NaN
 * then the provided default value is returned.
 *
 * @func findOr
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.2.7|v2.2.7}
 * @category List
 * @sig  a -> (b -> Boolean) -> [b] -> b | a
 * @param {*} defaultValue The default value
 * @param {Function} fn The predicate function used to determine if the element is the desired one.
 * @param {Array} list The array to consider.
 * @return {*} The element found, or the default value.
 * @see {@link http://ramdajs.com/docs/#defaultTo|R.defaultTo}
 * @example
 *
 * RA.findOr(1, isUndefined, [1, 2, undefined]); // => 1
 * RA.findOr(1, val => val === 2, [1, 2, undefined]); // => 2
 * RA.findOr(1, val => val === 3, [1, 2, undefined]); // => 1
 */

const findOr = curry((defaultValue, fn, arr) =>
  pipe(find(fn), defaultTo(defaultValue))(arr)
);

export default findOr;
