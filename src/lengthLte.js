import { flip, lte } from 'ramda';

import compareLength from './internal/compareLength';

/**
 * Returns `true` if the supplied list or string has a length less than or equal to `valueLength`.
 *
 * @func lengthLte
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthEq|lengthEq}, {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthLt|lengthLt}, {@link RA.lengthGt|lengthGt}, {@link RA.lengthGte|lengthGte}, {@link http://ramdajs.com/docs/#lte|lte}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthLte(3, [1,2]); //=> true
 * RA.lengthLte(3, [1,2,3]); //=> true
 * RA.lengthLte(3, [1,2,3,4]); //=> false
 */
const lengthLte = compareLength(flip(lte));

export default lengthLte;
