import { assert } from 'chai';

import * as RA from '../src';

describe('xnor', function () {
  it('should work on booleans', function () {
    assert.isTrue(RA.xnor(true, true));
    assert.isFalse(RA.xnor(false, true));
    assert.isFalse(RA.xnor(true, false));
    assert.isTrue(RA.xnor(false, false));
  });

  it('should work on numbers', function () {
    assert.isTrue(RA.xnor(1.0, 1.0));
    assert.isFalse(RA.xnor(0.0, 1.0));
    assert.isFalse(RA.xnor(1.0, 0.0));
    assert.isTrue(RA.xnor(0.0, 0.0));
  });

  it('should work on a combination of different values', function () {
    assert.isTrue(RA.xnor(true, 1.0));
    assert.isFalse(RA.xnor(null, true));
    assert.isFalse(RA.xnor(1.0, undefined));
    assert.isTrue(RA.xnor(0.0, false));
    assert.isTrue(RA.xnor(null, null));
    assert.isTrue(RA.xnor(null, undefined));
  });

  it('should be curried', function () {
    assert.isTrue(RA.xnor(true, true));
    assert.isTrue(RA.xnor(true)(true));
  });
});
