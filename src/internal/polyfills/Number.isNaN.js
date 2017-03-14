'use strict';

const { pipe, type, equals, both } = require('ramda');


module.exports = both(
  pipe(type, equals('Number')), // TODO(vladimir.gorej@gmail.com): replace for isNumber
  isNaN
);
