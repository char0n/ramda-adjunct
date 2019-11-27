import { assert } from 'chai';

import * as RA from '../src';

describe('stubUndefined', function() {
  it('tests `function` that returns `undefined`', function() {
    assert.isUndefined(RA.stubUndefined());
    assert.isUndefined(RA.stubUndefined([1]));
    assert.isUndefined(RA.stubUndefined(new Array()));
    assert.isUndefined(RA.stubUndefined(1, 2, 3));
  });
});
