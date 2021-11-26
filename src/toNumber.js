import { ifElse, always } from 'ramda';

import isCoercible from './internal/isCoercible';

/**
 * Converts value to a number.
 *
 * @func toNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.29.0|v2.29.0}
 * @param {*} val The value to convert
 * @return {Number}
 * @example
 *
 * toNumber('1'); //=> 1
 * toNumber('abc'); //=> NaN
 * toNumber(Symbol.for('test')); //=> NaN
 * toNumber(Object.create(null)); //=> NaN
 */
const toNumber = ifElse(isCoercible, Number, always(NaN));

export default toNumber;
