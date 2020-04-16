import { curryN } from 'ramda';

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
  let fullPath = obj;

  try {
    for (let i = 0; i < pathToMethod.length; i += 1) {
      fullPath = fullPath[pathToMethod[i]];
    }

    return fullPath.apply(obj, args);
  } catch (e) {
    return undefined;
  }
});

export default invokeArgs;
