'use strict';

const { equals } = require('ramda');

/**
 * Checks if input `value` is `null`
 *
 * @func isNull
 * @memberOf RA
 * @since v0.1.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotNull|isNotNull}
 * @example
 *
 * RA.isNull(1); //=> false
 * RA.isNull(undefined); //=> false
 * RA.isNull(null); //=> true
 */
module.exports = equals(null);
