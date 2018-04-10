import { ifElse, curry, useWith, flip, both, gte, lt } from 'ramda';

const errorMessage = `low must not be greater than high in inRange(low, high, value)`;

/**
 * Checks if input value falls within the supplied range. The bottom of the range is inclusive, the
 * top of the range is exclusive.
 *
 * @func inRange
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Relation
 * @sig Number -> Number -> Number -> Boolean
 * @param {Number} low The lowest value within the range
 * @param {Number} high The highest value within the range
 * @param {Number} value The value to test
 * @return {Boolean}
 * @throws {Error} When `low` is greater than or equal to `high`
 * @example
 *
 * RA.inRange(0, 5, 3); //=> true
 * RA.inRange(0, 5, 0); //=> true
 * RA.inRange(0, 5, 4); //=> true
 * RA.inRange(0, 5, 5); //=> false
 * RA.inRange(0, 5, -1); //=> false
 */
export default curry((low, high, value) =>
  ifElse(
    gte,
    () => {
      throw new Error(errorMessage);
    },
    useWith(both, [flip(gte), flip(lt)])
  )(low, high)(value)
);
