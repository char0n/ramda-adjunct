'use strict';

const { both, converge, equals, identity } = require('ramda');

const isFinite = require('../../isFinite');


module.exports = both(isFinite, converge(equals, [Math.floor, identity]));
