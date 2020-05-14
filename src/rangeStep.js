import { curryN, curry, map, range, pipe } from 'ramda';
import * as R from 'ramda';

/**
 * Creates a list of numbers that ranges from start to stop according to a given step.
 *
 * @func rangeStep
 * @memberOf RA
 * @category List
 * @sig Number -> Number -> Number -> []Number
 * @param {number} start First element of the list
 * @param {number} stop Element at which the range stops
 * @param {number} step Difference between adjacent elements of the list
 * @return {number[]} A list of numbers ranging from start
 * to stop according to the given step
 * @see {@link R.range|range}
 * @example
 *
 * RA.rangeStep(1, 4, 1);   // => [1, 2, 3, 4]
 * RA.rangeStep(2, 8, 2);   // => [2, 4, 6, 8]
 * RA.rangeStep(0, 10, 3);  // => [0, 3, 6, 9]
 * RA.rangeStep(3, -3, -2); // => [3, 1, -1, -3]
 */
const nonNegativeOrDefault = curry((value, dft) => (value >= 0 ? value : dft));

const nonNegativeOrMinusOne = nonNegativeOrDefault(R.__, -1);

const rangeStep = curryN(3, (start, stop, step) =>
  map(
    (n) => start + step * n,
    range(0, 1 + pipe(nonNegativeOrMinusOne, Math.trunc)((stop - start) / step))
  )
);

export default rangeStep;
