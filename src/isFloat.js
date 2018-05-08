import { complement, both } from 'ramda';

import isInteger from './isInteger';
import isFinite from './isFinite';

/**
 * Checks whether the passed value is a `float`.
 *
 * @func isFloat
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.14.0|v1.14.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotFloat|isNotFloat}
 * @example
 *
 * RA.isFloat(0); //=> false
 * RA.isFloat(1); //=> false
 * RA.isFloat(-100000); //=> false
 *
 * RA.isFloat(0.1);       //=> true
 * RA.isFloat(Math.PI);   //=> true
 *
 * RA.isFloat(NaN);       //=> false
 * RA.isFloat(Infinity);  //=> false
 * RA.isFloat(-Infinity); //=> false
 * RA.isFloat('10');      //=> false
 * RA.isFloat(true);      //=> false
 * RA.isFloat(false);     //=> false
 * RA.isFloat([1]);       //=> false
 */
const isFloat = both(isFinite, complement(isInteger));

export default isFloat;
