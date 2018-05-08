import { both, complement } from 'ramda';

import isInteger from './isInteger';
import isOdd from './isOdd';

/**
 * Checks if value is even integer number.
 * An even number is an integer which is "evenly divisible" by two.
 * Zero is an even number because zero divided by two equals zero,
 * which despite not being a natural number, is an integer.
 * Even numbers are either positive or negative.
 *
 * @func isEven
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.0|v1.18.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isOdd|isOdd}
 * @example
 *
 * RA.isEven(0); // => true
 * RA.isEven(1); // => false
 * RA.isEven(-Infinity); // => false
 * RA.isEven(4); // => true
 * RA.isEven(3); // => false
 */
const isEven = both(isInteger, complement(isOdd));

export default isEven;
