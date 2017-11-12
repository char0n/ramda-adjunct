import { curryN, converge, merge, dissocPath, pathOr } from 'ramda';

/**
 * Spreads object under property path onto provided object.
 * It's like {@link RA.flattenPath|flattenPath}, but removes object under the property path.
 *
 * @func spreadPath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @typedef Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {!Array.<string|number>} path The property path to spread
 * @param {!Object} obj The provided object
 * @return {!Object} The result of the spread
 * @see {@link RA.spreadProp|spreadProp}, {@link RA.flattenPath|flattenPath}
 * @example
 *
 * RA.spreadPath(
 *   ['b1', 'b2'],
 *   { a: 1, b1: { b2: { c: 3, d: 4 } } }
 * ); // => { a: 1, c: 3, d: 4, b1: {} };
 */
const spreadPath = curryN(2, converge(merge, [dissocPath, pathOr({})]));

export default spreadPath;
