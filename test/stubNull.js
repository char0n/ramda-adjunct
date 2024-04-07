import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('stubNull', function () {
  context('given any input arguments', function () {
    specify('should return `null`', function () {
      assert.isNull(RA.stubNull());
      assert.isNull(RA.stubNull([1]));
      assert.isNull(RA.stubNull(new Array()));
      assert.isNull(RA.stubNull(1, 2, 3));
    });
  });
});
