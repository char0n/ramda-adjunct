import { pathOr, curry, merge } from 'ramda';

/**
 * Flattens a property path so that its fields are spread out into the provided object.
 *
 *
 * @func flattenPath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @sig
 *   [Idx] -> {k: v} -> {k: v}
 *   Idx = String | Int
 * @param {!Array.<string|number>} path The property path to flatten
 * @param {!Object} obj The provided object
 * @return {!Object} The flattened object
 * @see {@link RA.flattenProp|flattenProp}
 * @example
 *
 * R.flattenPath(
 *   ['b1', 'b2'],
 *   { a: 1, b1: { b2: { c: 3, d: 4 } } }
 * ); // => { a: 1, c: 3, d: 4, b1: { b2: { c: 3, d: 4 } } };
 */
const flattenPath = curry((path, obj) => merge(obj, pathOr({}, path, obj)));

export default flattenPath;
