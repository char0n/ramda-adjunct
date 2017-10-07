import { curry } from 'ramda';
import mergePath from './mergePath';

/**
 * Merges user provided data (subject) with some object (target)
 * inside other object under corresponding property.
 *
 * @func mergeProp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.0|v1.18.0}
 * @category Object
 * @sig [k] -> {a} -> {k: {a}} -> {k: {a}}
 * @see {@link RA.mergeProp|mergeProp}
 * @param {!Array} prop The prop to object to merge with
 * @param {!Object} subj The object which will be merged with object in prop
 * @param {!Object} obj The object which has target object under corresponding prop
 * @return {!Object} The new version of object
 * @example
 *
 * RA.mergeProp(
 *  'a',
 *  {c2: 22, c3: 33},
 *  {a: {c1: 1, c2: 2}}
 * ); //=> {a: {c1:1, c2: 22, c3: 33}}
 */
const mergeProp = curry((prop, subj, obj) => mergePath([prop], subj, obj));

export default mergeProp;
