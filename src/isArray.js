'use strict';

const isArray = require('ramda/src/internal/_isArray');

/**
 * Checks if input value is `Array`
 *
 * @func isArray
 * @memberOf RA
 * @since v0.3.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotArray|isNotArray}
 * @example
 *
 * RA.isArray([]); //=> true
 * RA.isArray(null); //=> false
 * RA.isArray({}); //=> false
 */

module.exports = isArray;
