import { view, curryN, equals, pipe } from 'ramda';

/**
 * Returns `true` if data structure focused by the given lens equals provided value.
 *
 * @func lensEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig  Lens s a -> b -> s -> Boolean
 * @see {@link RA.lensNotEq|lensNotEq}
 * @param {function} lens Van Laarhoven lens
 * @param {*} value The value to compare the focused data structure with
 * @param {*} data The data structure
 * @return {boolean} `true` if the focused data structure equals value, `false` otherwise
 *
 * @example
 *
 * RA.lensEq(R.lensIndex(0), 1, [0, 1, 2]); // => false
 * RA.lensEq(R.lensIndex(1), 1, [0, 1, 2]); // => true
 * RA.lensEq(R.lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } }) // => true
 */
const lensEq = curryN(3, (lens, val, data) =>
  pipe(view(lens), equals(val))(data)
);

export default lensEq;
