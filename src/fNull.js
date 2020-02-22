import { isNil, curryN } from 'ramda';

import defaultWhen from './defaultWhen';
import isFunction from './isFunction';
import isArray from './isArray';

/**
 * Returns a function which is called with the given arguments. If any of the given arguments are null or undefined,
 * the corresponding default value for that argument is used instead to call the original function.
 *
 * @func fNull
 * @memberOf RA
 * @category Function
 * @sig function, [defaultArgs] -> function -> function(args or defaultArgs)
 * @param {Function} function to be executed
 * @param {Array|undefined} default arguments to call the function with
 * @return {Function} function to be called
 * @example
 *
 * RA.fNull(); // => fn // => undefined
 * RA.fNull(fn); // => fn // => fn(args) //no default arguments
 * RA.fNull(fn, [a]) // => fn // => fn(args) first argument with default param as a
 */

const fNull = curryN(2, (originalFunction, defaultArgs) => {
  const getDefaultArg = index => {
    if (isArray(defaultArgs)) {
      return defaultArgs[index];
    }
    return defaultArgs;
  };
  return (...args) => {
    if (isFunction(originalFunction)) {
      const argsOrDefaultArgs = [];
      args.forEach((arg, index) => {
        const defaultArg = getDefaultArg(index);
        const argOrDefault = defaultWhen(isNil, defaultArg, arg);
        argsOrDefaultArgs[index] = argOrDefault;
      });
      return originalFunction(...argsOrDefaultArgs);
    }
    return undefined;
  };
});

export default fNull;
