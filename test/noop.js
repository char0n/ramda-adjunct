import { assert } from 'chai';

import * as RA from '../src';

describe('noop', function() {
  it('tests `function` that performs no operations', function() {
    assert.isUndefined(RA.noop());
    assert.isUndefined(RA.noop([1]));
    assert.isUndefined(RA.noop(new Array()));
    assert.isUndefined(RA.noop(1, 2, 3));
  });
});
