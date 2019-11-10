import {
  apply,
  curryN,
  flip,
  map,
  pipe,
  toPairs,
  transpose,
  when,
} from 'ramda';

import lengthEq from './lengthEq';

/**
 * Creates a new list out of the supplied object by applying the function to each key/value pairing.
 *
 * @func unzipObjWith
 * @memberOf RA
 * @category Object
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @sig  (v, k) => [k, v] -> { k: v } -> [[k], [v]]
 * @param {Function} fn The function to transform each value-key pair
 * @param {Object} obj Object to unzip
 * @return {Array} A pair of tw lists: a list of keys and a list of values
 * @see {@link https://ramdajs.com/docs/#zipObj|zipObj}, {@link RA.zipObjWith|zipObjWith}
 * @example
 *
 * RA.unzipObjWith((v, k) => [`new${k.toUpperCase()}`, 2 * v], { a: 1, b: 2, c: 3 });
 * //=> [['newA', 'newB', 'newC'], [2, 4, 6]]
 */
const unzipObjWith = curryN(2, (fn, obj) =>
  pipe(
    toPairs,
    map(pipe(flip, apply)(fn)),
    transpose,
    when(lengthEq(0), () => [[], []])
  )(obj)
);

export default unzipObjWith;
