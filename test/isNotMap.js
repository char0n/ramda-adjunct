import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('isNotMap', function () {
  context('given a map', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotMap(new Map()));
      assert.isFalse(
        RA.isNotMap(
          new Map([
            [1, 2],
            [2, 1],
          ])
        )
      );
    });
  });

  context('given not a map', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotMap('abc'));
      assert.isTrue(RA.isNotMap(Object('abc')));
      assert.isTrue(RA.isNotMap(Object()));
      assert.isTrue(RA.isNotMap(new Date()));
      assert.isTrue(RA.isNotMap(new Error()));
      assert.isTrue(RA.isNotMap(RA.isNotMap));
      assert.isTrue(RA.isNotMap(3));
      assert.isTrue(RA.isNotMap(Symbol));
      assert.isTrue(RA.isNotMap(R));
      assert.isTrue(RA.isNotMap(new Set()));
      assert.isTrue(RA.isNotMap(new Set([1, 2])));
      assert.isTrue(RA.isNotMap(/regex/));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotMap = RA.isNotMap(R.__);

    assert.isFalse(isNotMap(new Map()));
  });
});
