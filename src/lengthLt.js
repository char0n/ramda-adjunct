import { flip, lt } from 'ramda';

import compareLength from './internal/compareLength';

/**
 * Returns `true` if the supplied list or string has a length less than `valueLength`.
 *
 * @func lengthLt
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthEq|lengthEq}, {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthGt|lengthGt}, {@link RA.lengthLte|lengthLte}, {@link RA.lengthGte|lengthGte}, {@link http://ramdajs.com/docs/#lt|lt}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthLt(3, [1,2]); //=> true
 * RA.lengthLt(3, [1,2,3]); //=> false
 */
const lengthLt = compareLength(flip(lt));

export default lengthLt;
