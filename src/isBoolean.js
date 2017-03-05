'use strict';

const { is } = require('ramda');

/**
 * Checks if input value is `Boolean`
 *
 * @func isBoolean
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotBoolean|isNotBoolean}
 * @example
 *
 * RA.isBoolean(false); //=> true
 * RA.isBoolean(true); //=> true
 * RA.isBoolean(null); //=> false
 */

module.exports = is(Boolean);
