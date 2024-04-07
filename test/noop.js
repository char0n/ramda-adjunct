import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('noop', function () {
  it('should represent a `function` that performs no operations', function () {
    assert.isUndefined(RA.noop());
    assert.isUndefined(RA.noop([1]));
    assert.isUndefined(RA.noop(new Array()));
    assert.isUndefined(RA.noop(1, 2, 3));
  });
});
