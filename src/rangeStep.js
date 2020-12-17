import { curryN, map, range, always } from 'ramda';

import floor from './floor';

/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
 *
 * `Note`: JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results.
 *
 * @func rangeStep
 * @memberOf RA
 * @category List
 * @since {@link https://char0n.github.io/ramda-adjunct/2.30.0|v2.30.0}
 * @sig Number -> Number -> Number -> [Number]
 * @param {number} step The value to increment or decrement by
 * @param {number} from The start of the range
 * @param {number} to The end of the range
 * @return {number[]} Returns the range of numbers
 * @see {@link http://ramdajs.com/docs/#range|R.range}
 * @example
 *
 * RA.rangeStep(1, 0, 4); // => [0, 1 ,2, 3]
 * RA.rangeStep(-1, 0, -4); // => [0, -1, -2, -3]
 * RA.rangeStep(1, 1, 5); // => [1, 2, 3, 4]
 * RA.rangeStep(5, 0, 20); // => [0, 5, 10, 15]
 * RA.rangeStep(-1, 0, -4); // => [0, -1, -2, -3]
 * RA.rangeStep(0, 1, 4); // => [1, 1, 1]
 * RA.rangeStep(1, 0, 0); // => []
 */
const rangeStep = curryN(3, (step, from, to) => {
  const callback = step === 0 ? always(from) : (n) => from + step * n;
  const rangeEnd = step === 0 ? to - from : floor((to - from) / step);

  return map(callback, range(0, rangeEnd));
});

export default rangeStep;
