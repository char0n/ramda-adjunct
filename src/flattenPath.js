import { pathOr, curry, merge } from 'ramda';

/**
 * Merges object under property path onto provided object.
 *
 * @func flattenPath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @sig
 *   [Idx] -> {k: v} -> {k: v}
 *   Idx = String | Int
 * @param {!Array.<string|number>} path The property path to spread
 * @param {!Object} obj The provided object
 * @return {!Object} The result of the merge
 * @see {@link RA.flattenProp|flattenProp}
 * @example
 *
 * R.flattenPath(
 *   ["b1", "b2"],
 *   { a: 1, b1: { b2: { c: 3, d: 4 } } }
 * ); // => { a: 1, c: 3, d: 4, b1: { b2: { c: 3, d: 4 } } };
 */
const flattenPath = curry((pth, obj) => merge(obj, pathOr({}, pth, obj)));

export default flattenPath;
