'use strict';

const { or } = require('ramda');

const polyfill = require('./internal/polyfills/Number.isFinite');

/**
 * Checks whether the passed value is a finite `Number`.
 *
 *
 * @func isFinite
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotFinite|isNotFinite}
 * @example
 *
 * Number.isFinite(Infinity); //=> false
 * Number.isFinite(NaN); //=> false
 * Number.isFinite(-Infinity); //=> false
 *
 * Number.isFinite(0); // true
 * Number.isFinite(2e64); // true
 *
 * Number.isFinite('0');  // => false,
 *                        // would've been true with global isFinite('0')
 * Number.isFinite(null); // => false
 *                        // would've been true with global isFinite(null)
 */

module.exports = or(Number.isFinite, polyfill);
