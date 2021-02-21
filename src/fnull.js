import { isNil, curryN, curry, apply } from 'ramda';

import defaultWhen from './defaultWhen';
import mapIndexed from './mapIndexed';

/**
 * Returns a function which is called with the given arguments. If any of the given arguments are null or undefined,
 * the corresponding default value for that argument is used instead.
 *
 * @func fnull
 * @memberOf RA
 * @category Function
 * @sig (a ... -> b) -> [c] -> a ... | c -> b
 * @param {Function} function to be executed
 * @param {Array} defaults default arguments
 * @return {Function} will apply provided arguments or default ones
 * @example
 *
 * const addDefaults = RA.fnull((a, b) => a + b, [4, 5])
 *
 * addDefaults(1, 2); // => 3
 * addDefaults(null, 2); // => 6
 * addDefaults(2, null); // => 7
 * addDefaults(undefined, undefined); // => 9
 */

const fnull = curry((fn, defaults) =>
  curryN(fn.length, (...args) => {
    const argsWithDefaults = mapIndexed(
      (val, idx) => defaultWhen(isNil, defaults[idx], val),
      args
    );

    return apply(fn, argsWithDefaults);
  })
);

export default fnull;
