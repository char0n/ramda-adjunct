import { ifElse, values } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

import isIterable from './isIterable';
import isFunction from './isFunction';
import polyfill from './internal/polyfills/Array.from';

export const fromPolyfill = curry1(polyfill);

const fromArray = isFunction(Array.from) ? curry1(Array.from) : fromPolyfill;

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
