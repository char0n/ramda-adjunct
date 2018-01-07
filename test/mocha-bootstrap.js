'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');


require('babel-register')({
  ignore: [
    /node_modules\/(?!fantasy-land)/,
  ],
});


chai.use(chaiAsPromised);
