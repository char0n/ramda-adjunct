import { curry, toPairs, pipe, map, adjust, fromPairs } from 'ramda';

/**
 * Creates a new object with the own properties of the provided object, but the
 * keys renamed according to logic of renaming function.
 *
 * Keep in mind that in the case of keys conflict is behaviour undefined and
 * the result may vary between various JS engines!
 *
 * @func renameKeysWith
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.5.0|v1.5.0}
 * @category Object
 * @sig (a -> b) -> {a: *} -> {b: *}
 * @param {Function} fn Function that renames the keys
 * @param {!Object} obj Provided object
 * @return {!Object} New object with renamed keys
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#rename-keys-of-an-object-by-a-function|Ramda Cookbook}, {@link RA.renameKeys|renameKeys}
 * @example
 *
 * RA.renameKeysWith(R.concat('a'), { A: 1, B: 2, C: 3 }) //=> { aA: 1, aB: 2, aC: 3 }
 */
const renameKeysWith = curry((fn, obj) =>
  pipe(
    toPairs,
    map(adjust(fn, 0)),
    fromPairs
  )(obj)
);

export default renameKeysWith;
