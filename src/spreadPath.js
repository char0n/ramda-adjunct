import { curry, pathOr, merge, dissoc } from 'ramda';

/**
 * Merges object under path with root object, removing path to object.
 *
 * @func spreadPath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @sig [k] -> {a: *} -> {b: *}
 * @param {!Object} path The path to object to merge with
 * @param {!Object} obj The root object
 * @return {!Object} Result of merging root object with object under path
 * @see {@link RA.spreadProp|spreadProp}
 * @example
 *
 * R.spreadPath(
 *   ["b1", "b2"],
 *   { a: 1, b1: { b2: { c: 3, d: 4 } } }
 * ); // => { a: 1, c: 3, d: 4 }
 */

const spreadPath = curry((path, object) => {
  const targ = pathOr({}, path, object);
  const withoutPath = dissoc(path[0], object);
  return merge(withoutPath, targ);
});

export default spreadPath;
