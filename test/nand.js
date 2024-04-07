import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('nand', function () {
  it('should work on booleans', function () {
    assert.isFalse(RA.nand(true, true));
    assert.isTrue(RA.nand(false, true));
    assert.isTrue(RA.nand(true, false));
    assert.isTrue(RA.nand(false, false));
  });

  it('should work on numbers', function () {
    assert.isFalse(RA.nand(1.0, 1.0));
    assert.isTrue(RA.nand(0.0, 1.0));
    assert.isTrue(RA.nand(1.0, 0.0));
    assert.isTrue(RA.nand(0.0, 0.0));
  });

  it('should work on a combination of different values', function () {
    assert.isFalse(RA.nand(true, 1.0));
    assert.isTrue(RA.nand(null, true));
    assert.isTrue(RA.nand(1.0, undefined));
    assert.isTrue(RA.nand(0.0, false));
    assert.isTrue(RA.nand(null, null));
    assert.isTrue(RA.nand(null, undefined));
  });

  it('should be curried', function () {
    assert.isFalse(RA.nand(true, true));
    assert.isFalse(RA.nand(true)(true));
  });
});
