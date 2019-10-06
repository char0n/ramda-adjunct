import { ifElse, values, curry } from 'ramda';

import isIterable from './isIterable';
import isFunction from './isFunction';
import polyfill from './internal/polyfills/Array.from';

export const fromPolyfill = curry(polyfill);

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
 */

const fromArray = isFunction(Array.from) ? curry(Array.from) : fromPolyfill;

const toArray = ifElse(isIterable, fromArray, values);

export default toArray;
