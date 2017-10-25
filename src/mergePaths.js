import { curryN, pipe, mergeAll } from 'ramda';

import paths from './paths';

/**
 * Merge objects under corresponding paths.
 *
 * @func mergePaths
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.17.0|v1.17.0}
 * @category Object
 * @sig [[k]] -> {k: {a}} -> {a}
 * @see {@link RA.mergeProps|mergeProps}
 * @param {!Array} paths The property paths to merge
 * @param {!Object} obj The object to query
 * @return {!Object} The object composed of merged property paths of obj
 * @example
 *
 * const obj = {
 *   foo: { fooInner: { fooInner2: 1 } },
 *   bar: { barInner: 2 }
 * };
 *
 * { ...obj.foo.fooInner, ...obj.bar }; //=>  { fooInner2: 1, barInner: 2 }
 * RA.mergePaths([['foo', 'fooInner'], ['bar']], obj); //=> { fooInner2: 1, barInner: 2 }
 */
const mergePaths = curryN(2, pipe(paths, mergeAll));

export default mergePaths;
