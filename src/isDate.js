import { is } from 'ramda';

/**
 * Checks if value is `Date` object.
 *
 * @func isDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotDate|isNotDate}
 * @example
 *
 * RA.isDate(new Date()); //=> true
 * RA.isDate('1997-07-16T19:20+01:00'); //=> false
 */
const isDate = is(Date);

export default isDate;
