import { curryN, reverse } from 'ramda';

/**
 * Returns a curried equivalent of the provided function, with the specified arity.
 * This function is like curryN, except that the provided arguments order is reversed.
 *
 * @func curryRightN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.12.0|v1.12.0}
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {number} length The arity for the returned function
 * @param {Function} fn The function to curry
 * @return {Function}  A new, curried function
 * @see {@link http://ramdajs.com/docs/#curryN|R.curryN}, {@link RA.curryRight|curryRight}
 * @example
 *
 * const concatStrings = (a, b, c) => a + b + c;
 * const concatStringsCurried = RA.curryRightN(3, concatStrings);
 *
 * concatStringCurried('a')('b')('c'); // => 'cba'
 */
const curryRightN = curryN(2, (arity, fn) =>
  curryN(arity, function wrapper(...args) {
    return fn.apply(this, reverse(args));
  })
);

export default curryRightN;
