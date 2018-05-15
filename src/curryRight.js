import { converge, length, identity } from 'ramda';

import curryRightN from './curryRightN';

/**
 * Returns a curried equivalent of the provided function.
 * This function is like curry, except that the provided arguments order is reversed.
 *
 * @func curryRight
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.12.0|v1.12.0}
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry
 * @return {Function}  A new, curried function
 * @see {@link http://ramdajs.com/docs/#curry|R.curry}, {@link RA.curryRightN|curryRightN}
 * @example
 *
 * const concatStrings = (a, b, c) => a + b + c;
 * const concatStringsCurried = RA.curryRight(concatStrings);
 *
 * concatStringCurried('a')('b')('c'); // => 'cba'
 */
const curryRight = converge(curryRightN, [length, identity]);

export default curryRight;
