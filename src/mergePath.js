import { curry, over, lensPath, merge, __ } from 'ramda';

/**
 * Merges user provided data (subject) with some object (target)
 * inside other object under corresponding path.
 *
 * @func mergePath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.0|v1.18.0}
 * @category Object
 * @sig [k] -> {a} -> {k: {a}} -> {k: {a}}
 * @see {@link RA.mergeProp|mergeProp}
 * @param {!Array} path The path to object to merge with
 * @param {!Object} subj The object which will be merged with object in path
 * @param {!Object} obj The object which has target object under corresponding path
 * @return {!Object} The new version of object
 * @example
 *
 * RA.mergePath(
 *  ['a', 'b'],
 *  {c2: 22, c3: 33},
 *  {a: {b: {c1: 1, c2: 2}}}
 * ); //=> {a: {b: {c1:1, c2: 22, c3: 33}}}
 */
const mergePath = curry((path, subj, obj) => over(lensPath(path), merge(__, subj), obj));

export default mergePath;
