import { ifElse, always, anyPass } from 'ramda';

import isCoercible from './internal/isCoercible';
import isNumber from './isNumber';
import isNull from './isNull';

/**
 * Converts value to a number.
 *
 * @func toNumber
 * @memberOf RA
 * @category Type
 * @since {@link https://char0n.github.io/ramda-adjunct/2.29.0|v2.29.0}
 * @sig * -> Number
 * @param {*} val The value to convert
 * @return {Number}
 * @example
 *
 * toNumber('1'); //=> 1
 * toNumber('abc'); //=> NaN
 * toNumber(Symbol.for('test')); //=> NaN
 * toNumber(Object.create(null)); //=> NaN
 */

const toNumber = ifElse(
  anyPass([isCoercible, isNumber, isNull]),
  Number,
  always(NaN)
);

export default toNumber;
