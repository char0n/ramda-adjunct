import { curry } from 'ramda';

/**
 * Checks if input value is a sentinel value (i.e. if it indicates a failure, if it is -1 or
 * '-1').
 *
 * @func isSentinelValue
 * @memberOf RA
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isSentinelValue(-1); //=> true
 * RA.isSentinelValue('-1'); //=> true
 * RA.isSentinelValue(2); //=> false
 * RA.isSentinelValue(1); //=> false
 * RA.isSentinelValue(0); //=> false
 * RA.isSentinelValue(true); //=> false
 * RA.isSentinelValue(false); //=> false
 * RA.isSentinelValue({}); //=> false
 * RA.isSentinelValue([]); //=> false
 */
// eslint-disable-next-line no-bitwise
const isSentinelValue = curry((val) => ~val === 0);

export default isSentinelValue;
