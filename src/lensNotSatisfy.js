import { complement } from 'ramda';

import lensSatisfies from './lensSatisfies';

/**
 * Returns `true` if data structure focused by the given lens doesn't satisfy the predicate.
 * Note that the predicate is expected to return boolean value.
 *
 * @func lensNotSatisfy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig  Boolean b => (a -> b) -> Lens s a -> s -> b
 * @see {@link RA.lensSatisfies|lensSatisfies}
 * @param {Function} predicate The predicate function
 * @param {Function} lens Van Laarhoven lens
 * @param {*} data The data structure
 * @return {boolean} `false` if the focused data structure satisfies the predicate, `true` otherwise
 *
 * @example
 *
 * RA.lensNotSatisfy(RA.isTrue, R.lensIndex(0), [false, true, 1]); // => true
 * RA.lensNotSatisfy(RA.isTrue, R.lensIndex(1), [false, true, 1]); // => false
 * RA.lensNotSatisfy(RA.isTrue, R.lensIndex(2), [false, true, 1]); // => true
 * RA.lensNotSatisfy(R.identity, R.lensProp('x'), { x: 1 }); // => true
 */
const lensNotSatisfy = complement(lensSatisfies);

export default lensNotSatisfy;
