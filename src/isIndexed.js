import { either } from 'ramda';

import isArray from './isArray';
import isString from './isString';

/**
 * Determine if input value is an indexed data type.
 *
 * @func isIndexed
 * @memberOf RA
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isIndexed([1]) //=> true
 * RA.isIndexed('test') //=> true
 */

const isIndexed = either(isString, isArray);

export default isIndexed;
