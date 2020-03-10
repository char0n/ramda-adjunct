import { either } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

import isArray from './isArray';
import isString from './isString';

/**
 * Determine if input value is an indexed data type.
 *
 * @func isIndexed
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.26.0|v2.26.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isIndexed([1]) //=> true
 * RA.isIndexed('test') //=> true
 */

const isIndexed = curry1(either(isString, isArray));

export default isIndexed;
