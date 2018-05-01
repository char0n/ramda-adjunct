import { lt, flip } from 'ramda';

import compareLength from './internal/compareLength';

/**
 * Returns `true` if the supplied list or string has a length less than `valueLength`.
 *
 * @func lengthLt
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {Number} valueLength The length of the list or string
 * @param {Number} value The list or string
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#lt|lt}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthLt(3, [1,2]); //=> true
 * RA.lengthLt(3, [1,2,3]); //=> false
 */
const lengthLt = compareLength(flip(lt));

export default lengthLt;
