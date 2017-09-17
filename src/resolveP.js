import { bind } from 'ramda';

/* eslint-disable max-len */
/**
 * Composable shortcut for `Promise.resolve`.
 *
 * Returns a Promise object that is resolved with the given value.
 * If the value is a thenable (i.e. has a "then" method), the returned promise will
 * "follow" that thenable, adopting its eventual state.
 *
 * @func resolveP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.16.0|v1.16.0}
 * @category Function
 * @sig a -> Promise a
 * @param {*} [value=undefined] Argument to be resolved by this Promise. Can also be a Promise or a thenable to resolve
 * @return {Promise} A Promise that is resolved with the given value, or the promise passed as value, if the value was a promise object
 * @see {@link RA.rejectP|rejectP}
 * @example
 *
 * RA.resolveP(); //=> Promise(undefined)
 * RA.resolveP('a'); //=> Promise('a')
 * RA.resolveP([1, 2, 3]); //=> Promise([1, 2, 3])
 */
/* eslint-enable max-len */
const resolveP = bind(Promise.resolve, Promise);

export default resolveP;
