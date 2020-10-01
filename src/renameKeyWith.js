import { curry, isNil, omit, pick } from 'ramda';

import renameKeysWith from './renameKeysWith';
import mergeRight from './mergeRight';

/**
 * Creates a new object with the own properties of the provided object, but the
 * key `key` renamed according to logic of renaming function.
 *
 * If the new key name already existed in the object, it will be overwritten.
 *
 * @func renameKeyWith
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.5.0|v1.5.0}
 * @category Object
 * @sig (a -> b) -> c -> {a: *} -> {b: *}
 * @param {Function} fn Function that renames the keys
 * @param {!string} key Key to rename
 * @param {!Object} obj Provided object
 * @return {!Object} New object with renamed key
 * @see {@link RA.renameKeysWith|renameKeysWith}
 * @example
 *
 * RA.renameKeyWith(R.concat('a'), 'A', { A: 1 }) //=> { aA: 1 }
 */
const renameKeyWith = curry((fn, key, obj) =>
  isNil(obj)
    ? {}
    : mergeRight(renameKeysWith(fn, pick(key, obj)), omit(key, obj))
);

export default renameKeyWith;
