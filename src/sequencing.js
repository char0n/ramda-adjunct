import { always, converge } from 'ramda';

/* eslint-disable max-len */
/**
 * Accepts a list of side-effecting functions and returns a new function. When
 * invoked, this new function is applied to some arguments, each side-effecting
 * function is applied to those same arguments in the order in which they were
 * declared. Due to their side-effecting nature, the return of each
 * side-effecting function is discarded and the new function will always return
 * `undefined`.
 *
 * @func sequencing
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Function
 * @sig [((a, b, ...) -> x | undefined), ((a, b, ...) -> y | undefined), ...] -> (a -> b -> ... -> undefined)
 * @param {Array} functions A list of side-effecting functions.
 * @return {Function} A new function.
 * @see {@link http://ramdajs.com/docs/#converge|converge}
 * @example
 *
 * const log = message => console.log(message);
 * const info = message => console.info(message);
 *
 * RA.sequencing([info, log])('foo'); //=> prints 'foo' via info then log
 */
const sequencing = converge(always(undefined));

export default sequencing;
