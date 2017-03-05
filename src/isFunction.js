'use strict';

const { anyPass } = require('ramda');
const isFunction = require('ramda/src/internal/_isFunction');

const isGeneratorFunction = require('./isGeneratorFunction');
const isAsyncFunction = require('./isAsyncFunction');

/* eslint-disable max-len */
/**
 * Checks if input value is `Function`
 *
 * @func isFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotFunction|isNotFunction}, {@link RA.isAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isFunction(function test() { }); //=> true
 * RA.isFunction(function* test() { }); //=> true
 * RA.isFunction(async function test() { }); //=> true
 * RA.isFunction(() => {}); //=> true
 * RA.isFunction(null); //=> false
 * RA.isFunction('abc'); //=> false
 */
/* eslint-enable max-len */

module.exports = anyPass([isFunction, isGeneratorFunction, isAsyncFunction]);
