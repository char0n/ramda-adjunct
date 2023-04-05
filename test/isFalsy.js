import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isFalsy', function () {
  context('given falsy value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isFalsy(false));
      assert.isTrue(RA.isFalsy(0));
      assert.isTrue(RA.isFalsy(-0));
      assert.isTrue(RA.isFalsy(''));
      assert.isTrue(RA.isFalsy(null));
      assert.isTrue(RA.isFalsy(undefined));
      assert.isTrue(RA.isFalsy(NaN));
    });
  });

  context('given truthy value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isFalsy('abc'));
      assert.isFalse(RA.isFalsy(Object('abc')));
      assert.isFalse(RA.isFalsy(args));
      assert.isFalse(RA.isFalsy([1, 2, 3]));
      assert.isFalse(RA.isFalsy(new Date()));
      assert.isFalse(RA.isFalsy(new Error()));
      assert.isFalse(RA.isFalsy(Array.prototype.slice));
      assert.isFalse(RA.isFalsy({ 0: 1, length: 1 }));
      assert.isFalse(RA.isFalsy(1));
      assert.isFalse(RA.isFalsy(/x/));
      assert.isFalse(RA.isFalsy(Symbol));
      assert.isFalse(RA.isFalsy({}));
      assert.isFalse(RA.isFalsy([]));
      assert.isFalse(RA.isFalsy(Infinity));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isFalsy = RA.isFalsy(R.__);

    assert.isTrue(isFalsy(null));
  });
});
