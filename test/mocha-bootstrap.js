'use strict';

require('@babel/register')({
  // ignore: [/node_modules\/(?!(chai-as-promised))/],
});

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
