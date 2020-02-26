import { invoker } from 'ramda';

/**
 * Composable shortcut for `Promise.then` that allows for success and failure call backs.
 * The thenCatchP function returns a Promise. It takes three arguments: a callback function for the success of the Promise,
 * a callback function for the failure of the Promise, and the promise instance itself.
 *
 * @func thenP
 * @memberOf RA
 * @aliases then
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category Function
 * @sig (a -> Error b -> Promise c | c) -> Promise c | Error b
 * @param {Function} onFulfilled A Function called if the Promise is fulfilled. This function has one argument, the fulfillment value
 * @param {Function} onRejected A Function called if the Promise is rejected. This function has one argument, the error
 * @param {Promise} promise Any Promise or Thenable object
 * @return {Promise} A Promise in the pending status

 * @see {@link RA.resolveP|resolveP}, {@link RA.rejectP|rejectP}, {@link RA.allP|allP}
 * @example
 *
 * const promise = Promise.resolve(1);
 * const add1 = v => v + 1;
 *
 * RA.thenCatchP(add1, console.error, promise); // => Promise(2)
 */
export const thenCatchP = invoker(2, 'then');

export default thenCatchP;
