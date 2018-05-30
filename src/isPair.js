import { both, equals, length, pipe } from 'ramda';

import isArray from './isArray';

/**
 * Checks if input value is a pair.
 *
 * @func isPair
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#pair|R.pair}, {@link RA.isNotPair|isNotPair}
 * @example
 *
 * RA.isPair([]); // => false
 * RA.isPair([0]); // => false
 * RA.isPair([0, 1]); // => true
 * RA.isPair([0, 1, 2]); // => false
 * RA.isPair({ 0: 0, 1: 1 }); // => false
 * RA.isPair({ foo: 0, bar: 0 }); // => false
 */
const isPair = both(
  isArray,
  pipe(
    length,
    equals(2)
  )
);

export default isPair;
