import { complement } from 'ramda';

import lensEq from './lensEq';

/**
 * Returns `true` if data structure focused by the given lens doesn't equal provided value.
 *
 * @func lensNotEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> b -> s -> Boolean
 * @see {@link RA.lensEq|lensEq}
 * @param {function} lens Van Laarhoven lens
 * @param {*} value The value to compare the focused data structure with
 * @param {*} data The data structure
 * @return {boolean} `false` if the focused data structure equals value, `true` otherwise
 *
 * @example
 *
 * RA.lensNotEq(R.lensIndex(0), 1, [0, 1, 2]); // => true
 * RA.lensNotEq(R.lensIndex(1), 1, [0, 1, 2]); // => false
 * RA.lensNotEq(R.lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } }) // => false
 */
const lensNotEq = complement(lensEq);

export default lensNotEq;
