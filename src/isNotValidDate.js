import { complement } from 'ramda';

import isValidDate from './isValidDate';

/**
 * Checks if value is complement of valid `Date` object.
 *
 * @func isNotValidDate
 * @aliases isInvalidDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.8.0|v1.8.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isValidDate|isValidDate}, {@link RA.isDate|isDate}, {@link RA.isNotDate|isNotDate}
 * @example
 *
 * RA.isNotValidDate(new Date()); //=> false
 * RA.isNotValidDate(new Date('a')); //=> true
 */
const isNotValidDate = complement(isValidDate);

export default isNotValidDate;
