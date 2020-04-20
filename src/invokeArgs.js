import { curryN } from 'ramda';

import isNotArray from './isNotArray';
import isNotObj from './isNotObj';
import isFunction from './isFunction';

/**
 * Invokes the method at path of object with given arguments.
 *
 * @func invokeArgs
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.27.0|v2.27.0}
 * @category Object
 * @sig Array -> Array -> Object -> *
 * @param {Array.<string|number>} path The path of the method to invoke
 * @param {Array} args The arguments to invoke the method with
 * @param {Object} obj The object to query
 * @return {*}
 * @example
 *
 * RA.invokeArgs(['abs'], [-1], Math); //=> 1
 * RA.invokeArgs(['path', 'to', 'non-existent', 'method'], [-1], Math); //=> undefined
 */

const invokeArgs = curryN(3, (pathToMethod, args, obj) => {
  if (isNotArray(pathToMethod) || isNotArray(args)) return undefined;

  /**
   * If we need these test cases:
   *  assert.strictEqual(RA.invokeArgs([], [1, 2], testFunc), 3);
   *  assert.strictEqual(RA.invokeArgs(['methodWithoutArgs'], [], testObj), 1);
   * then arrays 'pathToMethod' and 'args' can be empty, so we don't need isEmptyArray
   */

  let fullPath = obj;

  for (let i = 0; i < pathToMethod.length; i += 1) {
    if (isNotObj(fullPath)) return undefined;
    fullPath = fullPath[pathToMethod[i]];
  }

    /**
   * if we are here then we have a valid function/method to run
   * We don't need rethrow, because if it throws here then this is a
   * function/method implementation detaild which are outside of our control
   */

  if (isFunction(fullPath)) return fullPath.apply(obj, args);
});

export default invokeArgs;
