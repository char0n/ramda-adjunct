import { type, identical, pipe } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

/**
 * Checks if input value is `Boolean`.
 *
 * @func isBoolean
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotBoolean|isNotBoolean}
 * @example
 *
 * RA.isBoolean(false); //=> true
 * RA.isBoolean(true); //=> true
 * RA.isBoolean(null); //=> false
 */
const isBoolean = curry1(
  pipe(
    type,
    identical('Boolean')
  )
);

export default isBoolean;
