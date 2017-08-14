import { curryN, not, pipe } from 'ramda';

import lensSatisfies from './lensSatisfies';


/**
 * Returns `true` if data structure focused by by the given lens doesn't satisfy the predicate.
 * Note that the predicate is expected to return boolean value.
 *
 * @func lensNotSatisfy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @sig  Boolean b => (a -> b) -> Lens s a -> s -> b
  @see {@link RA.lensSatisfies|lensNotSatisfies}
 * @param {Function} predicate The predicate function
 * @param {Function} lens Van Laarhoven lens
 * @param {*} data The data structure
 * @return {Boolean} `false` if the focused data structure satisfies the predicate, `true` otherwise
 *
 * @example
 *
 * RA.lensNotSatisfies(R.equals(true), R.lensIndex(0), [false, true, 1]); // => true
 * RA.lensNotSatisfies(R.equals(true), R.lensIndex(1), [false, true, 1]); // => false
 * RA.lensNotSatisfies(R.equals(true), R.lensIndex(2), [false, true, 1]); // => true
 * RA.lensNotSatisfies(R.identity, R.lensProp('x'), { x: 1 }); // => true
 */
const lensNotSatisfies = curryN(3, pipe(lensSatisfies, not));


export default lensNotSatisfies;
