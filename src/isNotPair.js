import { complement } from 'ramda';

import isPair from './isPair';

/**
 * Checks if input value is complement of a pair.
 *
 * @func isNotPair
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#pair|R.pair}, {@link RA.isPair|isPair}
 * @example
 *
 * RA.isNotPair([]); // => true
 * RA.isNotPair([0]); // => true
 * RA.isNotPair([0, 1]); // => false
 * RA.isNotPair([0, 1, 2]); // => true
 * RA.isNotPair({0: 0, 1: 1}); // => true
 * RA.isNotPair({foo: 0, bar: 0}); // => true
 */
const isNotPair = complement(isPair);

export default isNotPair;
