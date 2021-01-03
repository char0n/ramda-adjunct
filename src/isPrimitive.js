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
 * Checks if value is a primitive.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values
 * for definition of what sub-types comprise a primitive.
 *
 * @func isPrimitive
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotObj|isNotObj}
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
