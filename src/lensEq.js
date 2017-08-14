import { view, curry, equals, pipe } from 'ramda';

/**
 * Check if "view" of given data structure, determined by the given lens
 * equals provided value.
 * 
 * @func lensEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @sig lens -> value -> data -> Boolean
 * @param {function} lens Van Laarhoven lens
 * @param {*} value The value to compare the lens "view" to
 * @param {*} subject The data structure to apply the lens to
 * @return {Boolean} `true` if the value equals lens "view", `false` otherwise.
 * 
 * @example
 * 
 * RA.lensEq(R.lensIndex(0), 1, [0, 1, 2]); // => false
 * RA.lensEq(R.lensIndex(1), 1, [0, 1, 2]); // => true
 * RA.lensEq(R.lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } }) // => true
 */
const lensEq = curry((lens, val, subject) => pipe(view(lens), equals(val))(subject));

export default lensEq;
