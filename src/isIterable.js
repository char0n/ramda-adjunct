import { hasIn, curryN } from 'ramda';

import isFunction from './isFunction';

/**
 * Checks whether the passed value is iterable.
 *
 * @func isIterable
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.18.0|v2.18.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol}
 * @return {boolean}
 * @example
 *
 * RA.isIterable(['arrays', 'are', 'iterable']); //=> true
 * RA.isIterable('strings are iterable, too'); //=> true
 * RA.isIterable((function* () {})()); //=> true (generator objects are both iterable and iterators)
 *
 * RA.isIterable({}); //=> false
 * RA.isIterable(-0); //=> false
 * RA.isIterable(null); //=> false
 * RA.isIterable(undefined); //=> false
 */
const isIterable = curryN(1, (val) => {
  if (typeof Symbol === 'undefined') {
    return false;
  }

  return (
    hasIn(Symbol.iterator, Object(val)) && isFunction(val[Symbol.iterator])
  );
});

export default isIterable;
