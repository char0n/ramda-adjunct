import isFunction from './isFunction';

/**
 * A function that repeatedly calls the return value of a function,
 * until it is no longer a function.
 *
 * @func trampoline
 * @memberOf RA
 * @category Function
 * @sig ... -> Any
 * @param  {Function} fn
 * @param  {Array} args The arguments to call fn with
 * @return {*} The result that is not a function
 * @example
 *
 * function evenOline(n) {
 *   if (n === 0)
 *     return true;
 *   else
 *     return R.partial(oddOline, [Math.abs(n) - 1]);
 * }
 *
 * function oddOline(n) {
 *   if (n === 0)
 *     return false;
 *   else
 *     return R.partial(evenOline, [Math.abs(n) - 1]);
 * }
 *
 * RA.trampoline(oddOline, 3); //=> true
 * RA.trampoline(evenOline, 200000); //=> true
 * RA.trampoline(oddOline, 300000); //=> false
 * RA.trampoline(evenOline, 200000000); //=> true
 */

const trampoline = (func, ...args) => {
  let result = func(...args);

  while (isFunction(result)) {
    result = result();
  }

  return result;
};

export default trampoline;
