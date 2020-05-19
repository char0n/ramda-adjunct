import { ifElse, partial, identity } from 'ramda';

import canCallNumberFunctionOn from './canCallNumberFunctionOn';

/**
 * Converts value to a number.
 *
 * @func toNumber
 * @category List
 * @sig * -> Number
 * @param {*} val The value to convert
 * @return {Number}
 * @example
 * toNumber('1'); //=> 1
 * toNumber('abc'); //=> NaN
 * toNumber(Symbol.for('test')); //=> NaN
 * toNumber(Object.create(null)); //=> NaN
 */
const toNumber = ifElse(
  canCallNumberFunctionOn,
  Number,
  partial(identity, [NaN])
);

export default toNumber;
