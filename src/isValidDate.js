import { invoker, both, pipe, curryN } from 'ramda';

import isDate from './isDate.js';
import isNotNaN from './isNotNaN.js';

/**
 * Checks if value is valid `Date` object.
 *
 * @func isValidDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.8.0|v1.8.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isDate|isDate}, {@link RA.isNotDate|isNotDate}, {@link RA.isNotValidDate|isNotValidDate}
 * @example
 *
 * RA.isValidDate(new Date()); //=> true
 * RA.isValidDate(new Date('a')); //=> false
 */

const isValidDate = curryN(
  1,
  both(isDate, pipe(invoker(0, 'getTime'), isNotNaN))
);

export default isValidDate;
