import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('isSet', function () {
  context('given a set', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isSet(new Set()));
      assert.isTrue(RA.isSet(new Set([1, 2])));
    });
  });

  context('given not a set', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isSet('abc'));
      assert.isFalse(RA.isSet(Object('abc')));
      assert.isFalse(RA.isSet(new Date()));
      assert.isFalse(RA.isSet(new Error()));
      assert.isFalse(RA.isSet(RA.isSet));
      assert.isFalse(RA.isSet(3));
      assert.isFalse(RA.isSet(Symbol));
      assert.isFalse(RA.isSet(R));
      assert.isFalse(RA.isSet(/regex/));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isSet = RA.isSet(R.__);

    assert.isTrue(isSet(new Set()));
  });
});
