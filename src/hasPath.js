import { length, has, path, head, tail, curryN } from 'ramda';

import isObj from './isObj';

/**
 * Returns whether or not an object has an own property with the specified name at a given path.
 *
 * @func hasPath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.14.0|v1.14.0}
 * @category Object
 * @typedef Idx = String | Int
 * @sig [Idx] -> {a} -> Boolean
 * @param {Array.<string|number>} path The path of the nested property
 * @param {Object} obj The object to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#has|R.has}
 * @example
 *
 * RA.hasPath(['a', 'b'], { a: { b: 1 } }); //=> true
 * RA.hasPath(['a', 'b', 'c'], { a: { b: 1 } }); //=> false
 * RA.hasPath(['a', 'b'], { a: { } }); //=> false
 * RA.hasPath([0], [1, 2]); //=> true
 */
const hasPath = curryN(2, (objPath, obj) => {
  const prop = head(objPath);

  // termination conditions
  if (length(objPath) === 0 || !isObj(obj)) {
    return false;
  }
  if (length(objPath) === 1) {
    return has(prop, obj);
  }

  return hasPath(tail(objPath), path([prop], obj)); // base case
});

export default hasPath;
