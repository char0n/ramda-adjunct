import { nAry } from 'ramda';

/**
 * Accepts a function with any arity and returns a function with arity of zero.
 * The returned function ignores any arguments supplied to it.
 *
 * @func dropArgs
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.10.0|v2.10.0}
 * @category Logic
 * @sig (...a -> b)-> () -> b
 * @param {Function} fn The function with any arity
 * @return {Function} Returns function with arity of zero
 * @see {@link http://ramdajs.com/docs/#nAry|R.nAry}
 * @example
 *
 * const fn = (a = 1, b = 2) => a + b;
 *
 * RA.dropArgs(fn)('ignore1', 'ignore2'); //=> 3
 */
const dropArgs = nAry(0);

export default dropArgs;
