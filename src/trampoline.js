import { curryN } from 'ramda';

import isFunction from './isFunction';

/**
 * A function that repeatedly calls the return value of a function,
 * until it is no longer a function.
 *
 * @func trampoline
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.28.0|v2.28.0}
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param  {Function} fn
 * @param  {Array} args The arguments to call fn with
 * @return {*} The result that is not a function
 * @example
 *
 * const evenOline = (n) => {
 *  if (n === 0) {
 *   return true;
 *  }
 *  return R.partial(oddOline, [Math.abs(n) - 1]);
 * };
 *
 * const oddOline = (n) => {
 *  if (n === 0) {
 *    return false;
 *  }
 *  return R.partial(evenOline, [Math.abs(n) - 1]);
 * };
 *
 * RA.trampoline(oddOline, [3]); //=> true
 * RA.trampoline(evenOline, [200000]); //=> true
 * RA.trampoline(oddOline, [300000]); //=> false
 * RA.trampoline(evenOline, [200000000]); //=> true
 */
const trampoline = curryN(2, (func, args) => {
  let result = func(...args);

  while (isFunction(result)) {
    result = result();
  }

  return result;
});

export default trampoline;
