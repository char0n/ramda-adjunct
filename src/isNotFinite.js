'use strict';

const { complement } = require('ramda');

const _isFinite = require('./isFinite');

/**
 * Checks whether the passed value is complement of finite `Number`.
 *
 *
 * @func isNotFinite
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFinite|isFinite}
 * @example
 *
 * Number.isNotFinite(Infinity); //=> true
 * Number.isNotFinite(NaN); //=> true
 * Number.isNotFinite(-Infinity); //=> true
 *
 * Number.isNotFinite(0); // false
 * Number.isNotFinite(2e64); // false
 *
 * Number.isNotFinite('0');  // => true
 * Number.isNotFinite(null); // => true
 */

module.exports = complement(_isFinite);
