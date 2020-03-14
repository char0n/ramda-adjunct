import {
  curry,
  addIndex,
  filter,
  pipe,
  modulo,
  identical,
  nthArg,
  __,
} from 'ramda';

/**
 * When given a number n and an array, returns an array containing every nth element.
 *
 * @func skipTake
 * @memberOf RA
 * @category List
 * @since {@link https://char0n.github.io/ramda-adjunct/2.26.0|v2.26.0}
 * @sig Number -> [a] -> [a]
 * @param {number} the nth element to extract
 * @param {Array} value the input array
 * @return {Array} An array containing every nth element
 * @example
 *
 * RA.skipTake(2, [1,2,3,4]) //=> [1, 3]
 * RA.skipTake(3, R.range(0, 20)); //=> [0, 3, 6, 9, 12, 15, 18]
 */

const skipTake = curry((n, list) =>
  addIndex(filter)(pipe(nthArg(1), modulo(__, n), identical(0)))(list)
);

export default skipTake;
