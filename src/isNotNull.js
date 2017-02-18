'use strict';

const { complement } = require('ramda');

const isNull = require('./isNull');

/**
 * Checks if input value is complement of `null`
 *
 * @func isNotNull
 * @memberOf RA
 * @since v0.1.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNull|isNull}
 * @example
 *
 * RA.isNotNull(1); //=> true
 * RA.isNotNull(undefined); //=> true
 * RA.isNotNull(null); //=> false
 */

module.exports = complement(isNull);
