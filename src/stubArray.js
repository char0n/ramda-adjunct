import { always } from 'ramda';

/**
 * A function that returns new empty array on every call.
 *
 * @func stubArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Function
 * @sig ... -> []
 * @return {[]}
 * @example
 *
 * RA.stubArray(); //=> []
 * RA.stubArray(1, 2, 3); //=> []
 */
const stubArray = always([]);

export default stubArray;
