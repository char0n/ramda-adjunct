import { of, curry } from 'ramda';

import spreadPath from './spreadPath';

/**
 * Merges object under prop with root object, removing prop to object.
 *
 * @func spreadProp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @sig @sig k -> {a: *} -> {b: *}
 * @param {!Object} prop The name of property that holds object to merge with
 * @param {!Object} obj The root object
 * @return {!Object} Result of merging root object with object under prop
 * @see {@link RA.spreadPath|spreadPath}
 * @example
 *
 * R.spreadProp("b", { a: 1, b: { c: 3, d: 4 } }); // => { a: 1, c: 3, d: 4 }
 */

const spreadProp = curry((prop, obj) => spreadPath(of(prop), obj));

export default spreadProp;
