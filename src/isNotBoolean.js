'use strict';

const { complement } = require('ramda');

const isBoolean = require('./isBoolean');

/**
 * Checks if input `value` is complement of Boolean
 *
 * @func isBoolean
 * @memberOf RA
 * @since v0.3.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isBoolean|isBoolean}
 * @example
 *
 * RA.isNotBoolean(false);  // false
 * RA.isNotBoolean(true);   // false
 * RA.isNotBoolean(null);   // true
 */

module.exports = complement(isBoolean);
