import {
  applyTo,
  gt,
  ifElse,
  curry,
  useWith,
  flip,
  both,
  gte,
  lte,
} from 'ramda';

import throwError from './internal/throwError';

const errorMessage = `low must not be greater than high in inRange(low, high, value)`;

/**
 * Checks if input value falls within the supplied inclusive range.
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
 * @throws {Error} When `low` is greater than `high`
 * @example
 *
 * RA.inRange(0, 5, 3); //=> true
 * RA.inRange(0, 5, 0); //=> true
 * RA.inRange(0, 5, 5); //=> true
 * RA.inRange(0, 5, -1); //=> false
 * RA.inRange(0, 5, 6); //=> false
 */
export default curry((low, high, value) =>
  ifElse(
    gt,
    () => applyTo(errorMessage, throwError),
    useWith(both, [flip(gte), flip(lte)])
  )(low, high)(value)
);
