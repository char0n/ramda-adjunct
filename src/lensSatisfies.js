import { view, curryN, pipe } from 'ramda';

import isTrue from './isTrue';

/**
 * Returns `true` if data structure focused by the given lens satisfies the predicate.
 * Note that the predicate is expected to return boolean value and will be evaluated
 * as `false` unless the predicate returns `true`.
 *
 * @func lensSatisfies
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig  Boolean b => (a -> b) -> Lens s a -> s -> b
 * @see {@link RA.lensNotSatisfy|lensNotSatisfy}
 * @param {Function} predicate The predicate function
 * @param {Function} lens Van Laarhoven lens
 * @param {*} data The data structure
 * @return {boolean} `true` if the focused data structure satisfies the predicate, `false` otherwise
 *
 * @example
 *
 * RA.lensSatisfies(RA.isTrue, R.lensIndex(0), [false, true, 1]); // => false
 * RA.lensSatisfies(RA.isTrue, R.lensIndex(1), [false, true, 1]); // => true
 * RA.lensSatisfies(RA.isTrue, R.lensIndex(2), [false, true, 1]); // => false
 * RA.lensSatisfies(R.identity, R.lensProp('x'), { x: 1 }); // => false
 */
const lensSatisfies = curryN(3, (predicate, lens, data) =>
  pipe(view(lens), predicate, isTrue)(data)
);

export default lensSatisfies;
