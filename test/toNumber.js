import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('toNumber', function () {
  context('given a coercible value', function () {
    specify('should return a number', function () {
      assert.strictEqual(RA.toNumber(12e3), 12e3);
      assert.strictEqual(RA.toNumber(Infinity), Infinity);
      assert.strictEqual(RA.toNumber(null), 0);
      assert.isNaN(RA.toNumber(undefined));
    });
  });

  context('given non-coercible value', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.toNumber(Object.create(null)));
      assert.isNaN(RA.toNumber(Symbol.for('')));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const toNumber = RA.toNumber(R.__);
    assert.strictEqual(toNumber(1), 1);
  });
});
