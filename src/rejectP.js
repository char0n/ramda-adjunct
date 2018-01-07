import { bind } from 'ramda';

/**
 * Composable shortcut for `Promise.reject`.
 *
 * Returns a Promise object that is rejected with the given reason.
 *
 * @func rejectP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.16.0|v1.16.0}
 * @category Function
 * @sig a -> Promise a
 * @param {*} [reason=undefined] Reason why this Promise rejected
 * @return {Promise} A Promise that is rejected with the given reason
 * @see {@link RA.resolveP|resolveP}
 * @example
 *
 * RA.rejectP(); //=> Promise(undefined)
 * RA.rejectP('a'); //=> Promise('a')
 * RA.rejectP([1, 2, 3]); //=> Promise([1, 2, 3])
 */
const rejectP = bind(Promise.reject, Promise);

export default rejectP;
