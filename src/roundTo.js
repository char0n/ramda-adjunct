import { curryN } from 'ramda';

/**
 * Returns the value of a number rounded to the nearest multiple of a base number.
 *
 * @func roundTo
 * @memberOf RA
 * @category Math
 * @sig Number -> Number -> Number
 * @param {number} base The base number for the rounding process
 * @param {number} value The number to round
 * @return {number} The value of the given number rounded to the nearest multiple of base
 * @example
 *
 * roundTo(2, 11); //=> 12
 * roundTo(3, 11); //=> 12
 * roundTo(4, 11); //=> 12
 * roundTo(5, 11); //=> 10
 * roundTo(6, 11); //=> 12
 * roundTo(7, 11); //=> 14
 * roundTo(8, 11); //=> 8
 * roundTo(0.5, 3.7); //=> 3.5
 * roundTo(0.5, 3.75); //=> 4
 * roundTo(0.5, 3.8); //=> 4
 */
const roundTo = curryN(2, (base, value) => {
  const roundedValue = Math.round(value / Math.abs(base)) * Math.abs(base);
  return Number.isNaN(roundedValue) ? Number(value) : roundedValue;
});

export default roundTo;
