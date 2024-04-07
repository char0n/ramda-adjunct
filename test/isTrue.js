import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import args from './shared/arguments.js';

describe('isTrue', function () {
  context('given a `true` primitive', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isTrue(true));
      assert.isTrue(RA.isTrue(Boolean(true)));
    });
  });

  context('given a non `true` value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isTrue(false));
      assert.isFalse(RA.isTrue(Boolean(false)));
      assert.isFalse(RA.isTrue(new Boolean(true)));
      assert.isFalse(RA.isTrue(new Boolean(false)));
      assert.isFalse(RA.isTrue('true'));
      assert.isFalse(RA.isTrue('abc'));
      assert.isFalse(RA.isTrue(Object('abc')));
      assert.isFalse(RA.isTrue(args));
      assert.isFalse(RA.isTrue([1, 2, 3]));
      assert.isFalse(RA.isTrue(new Date()));
      assert.isFalse(RA.isTrue(new Error()));
      assert.isFalse(RA.isTrue(Array.prototype.slice));
      assert.isFalse(RA.isTrue({ 0: 1, length: 1 }));
      assert.isFalse(RA.isTrue(/x/));
      assert.isFalse(RA.isTrue({}));
      assert.isFalse(RA.isTrue([]));
      assert.isFalse(RA.isTrue(Infinity));
      assert.isFalse(RA.isTrue(-0));
      assert.isFalse(RA.isTrue(0));
      assert.isFalse(RA.isTrue(1));
      assert.isFalse(RA.isTrue(''));
      assert.isFalse(RA.isTrue(null));
      assert.isFalse(RA.isTrue(undefined));
      assert.isFalse(RA.isTrue(NaN));
      assert.isFalse(RA.isTrue(Symbol));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isTrue = RA.isTrue(R.__);

    assert.isTrue(isTrue(true));
  });
});
