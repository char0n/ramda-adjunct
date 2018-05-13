import { invoker } from 'ramda';

/**
 * Composable shortcut for `Promise.then`.
 * The thenP function returns a Promise. It takes two arguments: a callback function for the success of the Promise
 * and the promise instance itself.
 *
 * @func thenP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category Function
 * @sig (a -> Promise b | b) -> Promise b
 * @param {Function} onFulfilled A Function called if the Promise is fulfilled. This function has one argument, the fulfillment value
 * @param {Promise} promise Any Promise or Thenable object
 * @return {Promise} A Promise in the pending status

 * @see {@link RA.resolveP|resolveP}, {@link RA.rejectP|rejectP}, {@link RA.allP|allP}
 * @example
 *
 * const promise = Promise.resolve(1);
 * const add1 = v => v + 1;
 *
 * RA.thenP(add1, promise); // => Promise(2)
 */
const thenP = invoker(1, 'then');

export default thenP;
