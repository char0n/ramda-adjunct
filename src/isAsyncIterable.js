import { hasIn, curryN } from 'ramda';

import isFunction from './isFunction';

/**
 * Checks whether the passed value is async iterable.
 *
 * @func isAsyncIterable
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/3.2.0|v3.2.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator}
 * @return {boolean}
 * @example
 *
 * RA.isAsyncIterable({
 *   async* [Symbol.asyncIterator]() {
 *       yield "Blade";
 *       yield "Runner"
 *   }
 * }); //=> true
 *
 * RA.isAsyncIterable({}); //=> false
 * RA.isAsyncIterable(-0); //=> false
 * RA.isAsyncIterable(null); //=> false
 * RA.isAsyncIterable(undefined); //=> false
 */
const isAsyncIterable = curryN(1, (val) => {
  if (typeof Symbol === 'undefined') {
    return false;
  }

  return (
    hasIn(Symbol.asyncIterator, Object(val)) &&
    isFunction(val[Symbol.asyncIterator])
  );
});

export default isAsyncIterable;
