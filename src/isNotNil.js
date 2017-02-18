'use strict';

const { isNil, complement } = require('ramda');

/**
 * Checks if input value is complement of `null` or `undefined`
 *
 * @func isNotNil
 * @memberOf RA
 * @since v0.3.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isNil|isNil}
 * @example
 *
 * RA.isNotNil(null); //=> false
 * RA.isNotNil(undefined); //=> false
 * RA.isNotNil(0); //=> true
 * RA.isNotNil([]); //=> true
 */
module.exports = complement(isNil);
