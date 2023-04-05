import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('isMap', function () {
  context('given a map', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isMap(new Map()));
      assert.isTrue(
        RA.isMap(
          new Map([
            [1, 2],
            [2, 1],
          ])
        )
      );
    });
  });

  context('given not a map', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isMap('abc'));
      assert.isFalse(RA.isMap(Object('abc')));
      assert.isFalse(RA.isMap(Object()));
      assert.isFalse(RA.isMap(new Date()));
      assert.isFalse(RA.isMap(new Error()));
      assert.isFalse(RA.isMap(RA.isMap));
      assert.isFalse(RA.isMap(3));
      assert.isFalse(RA.isMap(Symbol));
      assert.isFalse(RA.isMap(R));
      assert.isFalse(RA.isMap(new Set()));
      assert.isFalse(RA.isMap(new Set([1, 2])));
      assert.isFalse(RA.isMap(/regex/));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isMap = RA.isMap(R.__);

    assert.isTrue(isMap(new Map()));
  });
});
