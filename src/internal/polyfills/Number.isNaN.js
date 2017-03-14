'use strict';

const { both } = require('ramda');

const isNumber = require('../../isNumber');


module.exports = both(isNumber, isNaN);
