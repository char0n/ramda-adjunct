import { pipe, curry, find, defaultTo } from 'ramda';

/**
 * Returns the first element of the list which matches the predicate.
 * Returns default value if no element matches or matched element is `null`, `undefined` or `NaN`.
 * Dispatches to the find method of the second argument, if present.
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func findOr
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.32.0|v2.32.0}
 * @category List
 * @sig  a -> (b -> Boolean) -> [b] -> b | a
 * @param {*} defaultValue The default value
 * @param {Function} fn The predicate function used to determine if the element is the desired one.
 * @param {Array} list The array to consider.
 * @return {*} The element found, or the default value.
 * @see {@link http://ramdajs.com/docs/#defaultTo|R.defaultTo}, {@link http://ramdajs.com/docs/#find|R.find}
 * @example
 *
 * RA.findOr(1, isUndefined, [1, 2, undefined]); // => 1
 * RA.findOr(1, val => val === 2, [1, 2, undefined]); // => 2
 * RA.findOr(1, val => val === 3, [1, 2, undefined]); // => 1
 */

const findOr = curry((defaultVal, fn, list) =>
  pipe(find(fn), defaultTo(defaultVal))(list)
);

export default findOr;
