import { complement, curryN } from 'ramda';

import isPrimitive from './isPrimitive';

/**
 * Checks if value is not a primitive.
 *
 * @func isNotPrimitive
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotObj|isNotObj}, {@link RA.isPrimitive|isPrimitive}
 * @example
 *
 * RA.isNotPrimitive(new String("string")); //=> true
 * RA.isNotPrimitive(new Number(1)); //=> true
 * RA.isNotPrimitive("string"); //=> false
 * RA.isNotPrimitive(1); //=> false
 */

const isNotPrimitive = curryN(1, complement(isPrimitive));

export default isNotPrimitive;
