import { view, curry } from 'ramda';

/**
 * Check if "view" of given data structure, determined by the given lens
 * satisfies the predicate.
 * 
 * @func lensSatisfies
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.14.0|1.14.0}
 * @category Relation
 * @sig predicate -> lens -> data -> Boolean
 * @param {Function} predicate The value to compare the lens "view" to
 * @param {Function} lens Van Laarhoven lens
 * @param {*} subject The data structure to apply the lens to
 * @return {Boolean} `true` if the "view" does satisfy the predicate, `false` otherwise.
 * 
 * @example
 * 
 * RA.lensSatisfies(R.equals(true), R.lensIndex(0), [false, true, 1]); // => false
 * RA.lensSatisfies(R.equals(true), R.lensIndex(1), [false, true, 1]); // => true
 * RA.lensSatisfies(R.equals(true), R.lensIndex(2), [false, true, 1]); // => false
 * 
 * // Note that the predicate is expected to return boolean value and will
 * // be evaluated as `false` unless the predicate returns `true`
 * RA.lensSatisfies(R.identity, R.lensProp('x'), { x: 1 }); // => false
 */
const lensSatisfies = curry((predicate, lens, subject) => predicate(view(lens, subject)) === true);

export default lensSatisfies;
