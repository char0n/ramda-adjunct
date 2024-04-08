"use strict";

module.exports = {
  recursive: true,
  spec: 'test/**/*.js',
  require: ['test/mocha-bootstrap.js'],
  reporter: 'mocha-multi-reporters',
  'reporter-options': 'configFile=test/mocha-multi.json',
};
