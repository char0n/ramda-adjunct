import { curry, compose, flip, length, lt } from 'ramda';

/**
 * Returns `true` if the supplied list or string has a length less than `valueLength`.
 *
 * @func isLengthLt
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param Number valueLength The length of the list or string
 * @param Number value The list or string
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#lt|lt}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.isLengthLt(3, [1,2]); //=> true
 * RA.isLengthLt(3, [1,2,3]); //=> false
 */
const isLengthLt = curry((valueLength, value) =>
  compose(flip(lt)(valueLength), length)(value)
);

export default isLengthLt;
