import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('isNotSet', function () {
  context('given a set', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotSet(new Set()));
      assert.isFalse(RA.isNotSet(new Set([1, 2])));
    });
  });

  context('given not a set', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotSet('abc'));
      assert.isTrue(RA.isNotSet(Object('abc')));
      assert.isTrue(RA.isNotSet(new Date()));
      assert.isTrue(RA.isNotSet(new Error()));
      assert.isTrue(RA.isNotSet(RA.isNotSet));
      assert.isTrue(RA.isNotSet(3));
      assert.isTrue(RA.isNotSet(Symbol));
      assert.isTrue(RA.isNotSet(R));
      assert.isTrue(RA.isNotSet(/regex/));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotSet = RA.isNotSet(R.__);

    assert.isFalse(isNotSet(new Set()));
  });
});
