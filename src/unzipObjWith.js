import { curryN, pipe, apply, map, toPairs, flip, transpose } from 'ramda';

/**
 * Creates a new list out of the supplied object by applying the function to each key/value pairing.
 *
 * @func unzipObjWith
 * @memberOf RA
 * @category Object
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @sig Functor f => (v, k) => [c, d] -> { k: v } -> [[c], [d]]
 * @param {Function} fn The function to transform each value-key pair
 * @param {Object} obj Object to unzip
 * @return {Array} An array with two elements: an array of keys and an array of values
 * @see {@link https://ramdajs.com/docs/#mapObjIndexed}
 * @example
 *
 * RA.unzipObjWith((v, k) => [`new${k.toUpperCase()}`, 2 * v], { a: 1, b: 2, c: 3 });
 * //=> [['newA', 'newB', 'newC'], [2, 4, 6]]
 */
const unzipObjWith = curryN(2, (fn, obj) =>
  pipe(
    toPairs,
    map(
      pipe(
        flip,
        apply
      )(fn)
    ),
    transpose
  )(obj)
);

export default unzipObjWith;
