import { assert } from 'chai';

import * as RA from '../src';

describe('stubNull', function() {
  it('tests `function` that returns `null`', function() {
    assert.isNull(RA.stubNull());
    assert.isNull(RA.stubNull([1]));
    assert.isNull(RA.stubNull(new Array()));
    assert.isNull(RA.stubNull(1, 2, 3));
  });
});
