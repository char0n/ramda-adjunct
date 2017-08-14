import { pipe, not } from 'ramda';
import lensEq from './lensEq';

/**
 * Check if "view" of given data structure, determined by the given lens
 * does not equal provided value.
 * 
 * @func lensNotEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @sig lens -> value -> data -> Boolean
 * @param {function} lens Van Laarhoven lens
 * @param {*} value The value to compare the lens "view" to
 * @param {*} subject The data structure to apply the lens to
 * @return {Boolean} `false` if the value equals lens "view", `true` otherwise.
 * 
 * @example
 * 
 * RA.lensNotEq(R.lensIndex(0), 1, [0, 1, 2]); // => true
 * RA.lensNotEq(R.lensIndex(1), 1, [0, 1, 2]); // => false
 * RA.lensNotEq(R.lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } }) // => false
 */
const lensNotEq = pipe(lensEq, not);

export default lensNotEq;
