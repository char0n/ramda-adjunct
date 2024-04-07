import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('stubUndefined', function () {
  context('given any input arguments', function () {
    specify('should return `undefined`', function () {
      assert.isUndefined(RA.stubUndefined());
      assert.isUndefined(RA.stubUndefined([1]));
      assert.isUndefined(RA.stubUndefined(new Array()));
      assert.isUndefined(RA.stubUndefined(1, 2, 3));
    });
  });
});
