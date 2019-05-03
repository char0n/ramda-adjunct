import { bind } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

import isFunction from './isFunction';
import polyfill from './internal/polyfills/Promise.allSettled';

export const allSettledPPolyfill = curry1(polyfill);

/**
 * Returns a promise that is fulfilled with an array of promise state snapshots,
 * but only after all the original promises have settled, i.e. become either fulfilled or rejected.
 * We say that a promise is settled if it is not pending, i.e. if it is either fulfilled or rejected.
 *
 * @func allSettledP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.18.0|v2.18.0}
 * @category Function
 * @typedef Settlement = { status: String, value: * }
 * @sig [Promise a] -> Promise [Settlement a]
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} Returns a promise that is fulfilled with an array of promise state snapshots
 * @see {@link RA.allP|allP}
 * @example
 *
 * RA.allSettledP([
 *   Promise.resolve(1),
 *   2,
 *   Promise.reject(3),
 * ]); //=> Promise([{ status: 'fulfilled', value: 1 }, { status: 'fulfilled', value: 2 }, { status: 'rejected', reason: 3 }])
 */
const allSettledP = isFunction(Promise.allSettled)
  ? curry1(bind(Promise.allSettled, Promise))
  : allSettledPPolyfill;

export default allSettledP;
