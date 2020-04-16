import { curryN } from 'ramda';

/**
 * Invokes the method at path of object with given arguments.
 * If method doesn't exists the function returns undefined.
 *
 * @func invokeArgs
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|v2.7.0}
 * @category Object
 * @sig Array -> Array -> Object -> *
 * @param {Array} pathToMethod Path to method
 * @param {Array} args Method's arguments
 * @param {Object} obj Object
 * @return {*}
 * @example
 *
 * RA.invokeArgs(['abs'], [-1], Math); //=> 1
 * RA.invokeArgs(['nonexistentMethod'], [-1], Math); //=> undefined
 */

const invokeArgs = curryN(3, (pathToMethod, args, obj) => {
  let fullPath = obj;

  try {
    for (let i = 0; i < pathToMethod.length; i = i + 1) {
      fullPath = fullPath[pathToMethod[i]];
    }

    return fullPath.apply(obj, args);
  } catch (e) {
    return undefined;
  }
});

export default invokeArgs;
