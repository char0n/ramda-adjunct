'use strict';

const assert = require('assert');
const R = require('ramda');

module.exports = function eq(actual, expected) {
  assert.strictEqual(arguments.length, 2);
  assert.strictEqual(R.toString(actual), R.toString(expected));
};
