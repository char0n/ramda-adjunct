import { both, pipe, toString, equals, curryN } from 'ramda';

import isObj from './isObj';

/**
 * Checks if input value is a native `Promise`.
 * The Promise object represents the eventual completion (or failure)
 * of an asynchronous operation, and its resulting value.
 *
 * @func isPromise
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link https://promisesaplus.com/|Promises/A+}, {@link RA.isThenable|isThenable}
 * @example
 *
 * RA.isPromise(null); // => false
 * RA.isPromise(undefined); // => false
 * RA.isPromise([]); // => false
 * RA.isPromise(Promise.resolve()); // => true
 * RA.isPromise(Promise.reject()); // => true
 * RA.isPromise({ then: () => 1 }); // => false
 */
const isPromise = curryN(
  1,
  both(isObj, pipe(toString, equals('[object Promise]')))
);

export default isPromise;
