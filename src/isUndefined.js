'use strict';

const { equals } = require('ramda');

/**
 * Checks if input value is `undefined`
 *
 * @func isUndefined
 * @memberOf RA
 * @since v0.0.1
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotUndefined|isNotUndefined}
 * @example
 *
 * RA.isUndefined(1); //=> false
 * RA.isUndefined(undefined); //=> true
 * RA.isUndefined(null); //=> false
 */
module.exports = equals(undefined);
