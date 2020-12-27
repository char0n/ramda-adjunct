import { ifElse, values, curryN } from 'ramda';

import isIterable from './isIterable';
import isFunction from './isFunction';
import ponyfill from './internal/ponyfills/Array.from';

export const fromPonyfill = curryN(1, ponyfill);

const fromArray = isFunction(Array.from) ? curryN(1, Array.from) : fromPonyfill;

/**
 * Converts value to an array.
 *
 * @func toArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category List
 * @sig * -> [a]
 * @param {*} val The value to convert
 * @return {Array}
 * @example
 *
 * RA.toArray([1, 2]); //=> [1, 2]
 * RA.toArray({'foo': 1, 'bar': 2}); //=> [1, 2]
 * RA.toArray('abc'); //=> ['a', 'b', 'c']
 * RA.toArray(1); //=> []
 * RA.toArray(null); //=> []
 */

const toArray = ifElse(isIterable, fromArray, values);

export default toArray;
