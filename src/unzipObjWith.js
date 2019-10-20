import {
  curryN,
  compose,
  pipe,
  apply,
  map,
  toPairs,
  flip,
  transpose,
} from 'ramda';

/**
 * Unzips an object into an two arrays of transformed keys and transformed values.
 *
 * When executed it converts the object into value/key pairs which are passed to the transformation
 * functor. The returned, transformed, `[key, value]` pairs are then grouped into two arrays of
 * keys and values which are returned as the unziped object.
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
const unzipObjWith = curryN(2, (fn, obj) => {
  const withFn = compose(
    apply,
    flip
  )(fn);
  return pipe(
    toPairs,
    map(withFn),
    transpose
  )(obj);
});

export default unzipObjWith;
