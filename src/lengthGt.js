import { flip, gt } from 'ramda';

import compareLength from './internal/compareLength';

/**
 * Returns `true` if the supplied list or string has a length greater than `valueLength`.
 *
 * @func lengthGt
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthEq|lengthEq}, {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthLt|lengthLt}, {@link RA.lengthLte|lengthLte}, {@link RA.lengthGte|lengthGte}, {@link http://ramdajs.com/docs/#gt|gt},  {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthGt(3, [1,2,3,4]); //=> true
 * RA.lengthGt(3, [1,2,3]); //=> false
 */
const lengthGt = compareLength(flip(gt));

export default lengthGt;
