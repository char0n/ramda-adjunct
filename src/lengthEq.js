import { equals } from 'ramda';

import compareLength from './internal/compareLength';

/**
 * Returns `true` if the supplied list or string has a length equal to `valueLength`.
 *
 * @func lengthEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthLt|lengthLt}, {@link RA.lengthGt|lengthGt}, {@link RA.lengthLte|lengthLte}, {@link RA.lengthGte|lengthGte},, {@link http://ramdajs.com/docs/#equals|equals}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthEq(3, [1,2,3]); //=> true
 * RA.lengthEq(3, [1,2,3,4]); //=> false
 */
const lengthEq = compareLength(equals);

export default lengthEq;
