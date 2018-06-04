import { ifElse, curry, useWith, both, gte, lte, gt } from 'ramda';

const inRangeImp = ifElse(
  gte,
  () => {
    throw new Error(
      'low must not be greater than high in inRange(low, high, value)'
    );
  },
  useWith(both, [lte, gt])
);

/**
 * Checks if `value` is between `low` and up to but not including `high`.
 *
 * @func inRange
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|v2.7.0}
 * @category Relation
 * @sig Number -> Number -> Number -> Boolean
 * @param {Number} low Start of the range
 * @param {Number} high The end of the range
 * @param {Number} value The value to test
 * @return {boolean}
 * @throws {Error} When `low` is greater than or equal to `high`
 * @example
 *
 * RA.inRange(0, 5, 3); //=> true
 * RA.inRange(0, 5, 0); //=> true
 * RA.inRange(0, 5, 4); //=> true
 * RA.inRange(0, 5, 5); //=> false
 * RA.inRange(0, 5, -1); //=> false
 */
export default curry((low, high, value) => inRangeImp(low, high)(value));
