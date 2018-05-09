import { complement } from 'ramda';

import _isNaN from './isNaN';

/**
 * Checks whether the passed value is complement of `NaN` and its type is not `Number`.
 *
 * @func isNotNaN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNaN|isNaN}
 * @example
 *
 * RA.isNotNaN(NaN); // => false
 * RA.isNotNaN(Number.NaN); // => false
 * RA.isNotNaN(0 / 0); // => false
 *
 * RA.isNotNaN('NaN'); // => true
 * RA.isNotNaN(undefined); // => true
 * RA.isNotNaN({}); // => true
 * RA.isNotNaN('blabla'); // => true
 *
 * RA.isNotNaN(true); // => true
 * RA.isNotNaN(null); // => true
 * RA.isNotNaN(37); // => true
 * RA.isNotNaN('37'); // => true
 * RA.isNotNaN('37.37'); // => true
 * RA.isNotNaN(''); // => true
 * RA.isNotNaN(' '); // => true
 */
const isNotNaN = complement(_isNaN);

export default isNotNaN;
