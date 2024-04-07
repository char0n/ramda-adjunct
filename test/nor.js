import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('nor', function () {
  it('should work on booleans', function () {
    assert.isFalse(RA.nor(true, true));
    assert.isFalse(RA.nor(false, true));
    assert.isFalse(RA.nor(true, false));
    assert.isTrue(RA.nor(false, false));
  });

  it('should work on numbers', function () {
    assert.isFalse(RA.nor(1.0, 1.0));
    assert.isFalse(RA.nor(0.0, 1.0));
    assert.isFalse(RA.nor(1.0, 0.0));
    assert.isTrue(RA.nor(0.0, 0.0));
  });

  it('should work on a combination of different values', function () {
    assert.isFalse(RA.nor(true, 1.0));
    assert.isFalse(RA.nor(null, true));
    assert.isFalse(RA.nor(1.0, undefined));
    assert.isTrue(RA.nor(0.0, false));
    assert.isTrue(RA.nor(null, null));
    assert.isTrue(RA.nor(null, undefined));
  });

  it('should be curried', function () {
    assert.isFalse(RA.nor(true, true));
    assert.isFalse(RA.nor(true)(true));
  });
});
