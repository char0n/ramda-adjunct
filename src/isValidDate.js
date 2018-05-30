import { invoker, both, pipe } from 'ramda';

import isDate from './isDate';
import isNotNaN from './isNotNaN';

/* eslint-disable max-len */
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
/* eslint-enable max-len */
const isValidDate = both(
  isDate,
  pipe(
    invoker(0, 'getTime'),
    isNotNaN
  )
);

export default isValidDate;
