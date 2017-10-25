import { of, curry } from 'ramda';

import flattenPath from './flattenPath';

/**
 * Merges object under property onto provided object.
 *
 * @func flattenProp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @sig
 *   [Idx] -> {k: v} -> {k: v}
 *   Idx = String | Int
 * @param {!string|number} prop The property to spread
 * @param {!Object} obj The provided object
 * @return {!Object} The result of the merge
 * @see {@link RA.flattenPath|flattenPath}
 * @example
 *
 * R.flattenProp(
 *   "b",
 *   { a: 1, b: { c: 3, d: 4 } }
 * ); // => { a: 1, c: 3, d: 4, b: { c: 3, d: 4 } };
 */
const flattenProp = curry((prop, obj) => flattenPath(of(prop), obj));

export default flattenProp;
