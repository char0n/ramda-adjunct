import { complement, curryN } from 'ramda';

import isPrimitive from './isPrimitive';

/**
 * Checks if value is not a primitive data type. There are 6 primitive data types: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` and a special case of `null`.
 *
 * @func isNotPrimitive
 * @category Type
 * @sig * -> Boolean
 * @since {@link https://char0n.github.io/ramda-adjunct/2.31.0|v2.31.0}
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
