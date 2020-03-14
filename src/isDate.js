import { type, identical, pipe, curryN } from 'ramda';

/**
 * Checks if value is `Date` object.
 *
 * @func isDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotDate|isNotDate}, {@link RA.isValidDate|isValidDate}, {@link RA.isNotValidDate|isNotValidDate}
 * @example
 *
 * RA.isDate(new Date()); //=> true
 * RA.isDate('1997-07-16T19:20+01:00'); //=> false
 */
const isDate = curryN(1, pipe(type, identical('Date')));

export default isDate;
