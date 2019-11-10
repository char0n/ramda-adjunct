import { apply, curryN, fromPairs, map, pipe, zip } from 'ramda';

/**
 * Creates a new object out of a list of keys and a list of values by applying the function
 * to each equally-positioned pair in the lists.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 *
 * @func zipObjWith
 * @memberOf RA
 * @category Object
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @sig (b, a) -> [k, v] -> [a] -> [b] -> { k: v }
 * @param {Function} fn The function to transform each value-key pair
 * @param {Array} keys Array to transform into the properties on the output object
 * @param {Array} values Array to transform into the values on the output object
 * @return {Object}  The object made by pairing up and transforming same-indexed elements of `keys` and `values`.
 * @see {@link https://ramdajs.com/docs/#zipObj|zipObj}, {@link RA.unzipObjWith|unzipObjWith}
 * @example
 *
 * RA.zipObjWith((value, key) => [key, `${key}${value + 1}`]), ['a', 'b', 'c'], [1, 2, 3]);
 *  // => { a: 'a2', b: 'b3', c: 'c4' }
 */
const zipObjWith = curryN(3, (fn, keys, values) =>
  pipe(zip, map(apply(fn)), fromPairs)(values, keys)
);

export default zipObjWith;
