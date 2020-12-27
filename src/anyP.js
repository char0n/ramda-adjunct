import { bind, curryN } from 'ramda';

import isFunction from './isFunction';
import ponyfill, { AggregatedError } from './internal/ponyfills/Promise.any';

export const anyPPonyfill = curryN(1, ponyfill);
export { AggregatedError };

/**
 * Returns a promise that is fulfilled by the first given promise to be fulfilled,
 * or rejected with an array of rejection reasons if all of the given promises are rejected.
 *
 * @func anyP
 * @memberOf RA
 * @category Function
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @sig [Promise a] -> Promise a
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} A promise that is fulfilled by the first given promise to be fulfilled, or rejected with an array of rejection reasons if all of the given promises are rejected
 * @see {@link RA.lastP|lastP}
 * @example
 *
 * RA.anyP([
 *   Promise.resolve(1),
 *   2,
 *   Promise.reject(3),
 * ]); //=> Promise(1)
 */
const anyP = isFunction(Promise.any)
  ? curryN(1, bind(Promise.any, Promise))
  : anyPPonyfill;

export default anyP;
