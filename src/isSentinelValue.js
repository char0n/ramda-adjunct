import { curryN } from 'ramda';

import isInteger32 from './isInteger32';

/**
 * Checks whether the passed value is a sentinel value.
 *
 * @func isSentinelValue
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.33.0|v2.33.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isSentinelValue|isSentinelValue}
 * @example
 *
 * RA.isSentinelValue(-1); //=> true
 *
 * RA.isSentinelValue('-1'); //=> false
 * RA.isSentinelValue(1); //=> false
 * RA.isSentinelValue([-1]); //=> false
 */
const isSentinelValue = curryN(1, (val) => isInteger32(val) && val === -1);

export default isSentinelValue;
