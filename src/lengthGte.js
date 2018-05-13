import { flip, gte } from 'ramda';

import compareLength from './internal/compareLength';

/**
 * Returns `true` if the supplied list or string has a length greater than or equal to
 * `valueLength`.
 *
 * @func lengthGte
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthEq|lengthEq}, {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthLt|lengthLt}, {@link RA.lengthGt|lengthGt}, {@link RA.lengthLte|lengthLte}, {@link http://ramdajs.com/docs/#gte|gte}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthGte(3, [1,2,3,4]); //=> true
 * RA.lengthGte(3, [1,2,3]); //=> true
 * RA.lengthGte(3, [1,2,3]); //=> false
 */
const lengthGte = compareLength(flip(gte));

export default lengthGte;
