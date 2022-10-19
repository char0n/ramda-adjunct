import { both, anyPass } from 'ramda';

import isNotObj from './isNotObj';
import isString from './isString';
import isNumber from './isNumber';
import isBigInt from './isBigInt';
import isBoolean from './isBoolean';
import isUndefined from './isUndefined';
import isNull from './isNull';
import isSymbol from './isSymbol';

/**
 * Checks if value is a primitive data type. There are 6 primitive data types: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` and a special case of `null`.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values
 * for definition of what sub-types comprise a primitive.
 *
 * @func isPrimitive
 * @memberOf RA
 * @category Type
 * @sig * -> Boolean
 * @since {@link https://char0n.github.io/ramda-adjunct/2.32.0|v2.32.0}
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotPrimitive|isNotPrimitive}, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values|MDN Primitive values}, {@link https://developer.mozilla.org/en-US/docs/Glossary/Primitive|MDN Primitive}
 * @example
 *
 * RA.isPrimitive("string"); //=> true
 * RA.isPrimitive(1); //=> true
 * RA.isPrimitive(new String("string")); //=> false
 * RA.isPrimitive(new Number(1)); //=> false
 */

const isPrimitive = both(
  isNotObj,
  anyPass([
    isString,
    isNumber,
    isBigInt,
    isBoolean,
    isUndefined,
    isNull,
    isSymbol,
  ])
);

export default isPrimitive;
