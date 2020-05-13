import { complement } from 'ramda';

import isMap from './isMap';

/**
 * Checks if value is complement of `Map` object.
 *
 * @func isNotMap
 * @memberOf RA
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isMap|isMap}
 * @example
 *
 * RA.isNotMap(new Map()); //=> false
 * RA.isNotMap(new Map([[1, 2], [2, 1]])); //=> false
 * RA.isNotMap(new Set()); //=> true
 * RA.isNotMap({}); //=> true
 * RA.isNotMap(12); //=> true
 */

const isNotMap = complement(isMap);

export default isNotMap;
