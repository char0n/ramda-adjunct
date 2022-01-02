import { ifElse, always } from 'ramda';

import isCoercible from './internal/isCoercible';

/**
 * Converts value to a number.
 *
 * @func toNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.36.0|v2.36.0}
 * @category Type
 * @param {*} val The value to convert
 * @return {Number}
 * @example
 *
 * RA.toNumber(3.2); //=> 3.2
 * RA.toNumber(Number.MIN_VALUE); //=> 5e-324
 * RA.toNumber(Infinity); //=> Infinity
 * RA.toNumber('3.2'); //=> 3.2
 * RA.toNumber(Symbol('3.2')); //=> NaN
 */
const toNumber = ifElse(isCoercible, Number, always(NaN));

export default toNumber;
