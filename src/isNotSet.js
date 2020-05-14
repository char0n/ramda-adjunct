import { complement } from 'ramda';

import isSet from './isSet';

/**
 * Checks if value is complement of `Set` object.
 *
 * @func isNotSet
 * @memberOf RA
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isSet|isSet}
 * @example
 *
 * RA.isNotSet(new Map()); //=> true
 * RA.isNotSet(new Set()); //=> false
 * RA.isNotSet(new Set([1,2]); //=> false
 * RA.isNotSet(new Object()); //=> true
 */

const isNotSet = complement(isSet);

export default isNotSet;
