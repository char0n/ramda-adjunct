'use strict';

/**
 * Checks if input `value` is `null`
 *
 * @func
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
const isNull = val => val === null;

module.exports = isNull;
