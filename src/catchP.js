import { invoker } from 'ramda';

/**
 * Composable shortcut for `Promise.catch`.
 * The catchP function returns a Promise. It takes two arguments: a callback function for the failure of the Promise
 * and the promise instance itself.
 *
 * @func catchP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.29.0|v2.29.0}
 * @category Function
 * @sig (a -> Promise b | b) -> Promise b
 * @param {Function} onRejected A Function called if the Promise is rejected. This function has one argument, the rejection reason.
 * @param {Promise} promise Any Promise
 * @return {Promise} Returns a Promise with dealt rejected cases
 * @see {@link RA.thenP|thenP}, {@link RA.resolveP|resolveP}, {@link RA.rejectP|rejectP}, {@link RA.allP|allP}
 *
 * @example
 *
 * RA.catchP(() => 'b', Promise.resolve('a')); //=> Promise('a')
 * RA.catchP(() => 'b', Promise.reject('a')); //=> Promise('b')
 */
const catchP = invoker(1, 'catch');

export default catchP;
