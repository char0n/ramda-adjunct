'use strict';

const { or } = require('ramda');

// TODO(vladimir.gorej@gmail.com): review after issue with istanbul is resolved.
// https://github.com/gotwarlost/istanbul/issues/780
/* eslint-disable no-restricted-properties */
module.exports = or(Number.MAX_SAFE_INTEGER, Math.pow(2, 53) - 1);
/* eslint-enable no-restricted-properties */
