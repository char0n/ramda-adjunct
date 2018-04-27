import { curry, compose, flip, length, gt } from 'ramda';

/**
 * Returns `true` if the supplied list or string has a length greater than `valueLength`.
 *
 * @func isLengthGt
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param Number valueLength The length of the list or string
 * @param Number value The list or string
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#gt|gt}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.isLengthGt(3, [1,2,3,4]); //=> true
 * RA.isLengthGt(3, [1,2,3]); //=> false
 */
const isLengthGt = curry((valueLength, value) =>
  compose(flip(gt)(valueLength), length)(value)
);

export default isLengthGt;
