import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isTruthy', function () {
  context('given a truthy value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isTruthy('abc'));
      assert.isTrue(RA.isTruthy(Object('abc')));
      assert.isTrue(RA.isTruthy(args));
      assert.isTrue(RA.isTruthy([1, 2, 3]));
      assert.isTrue(RA.isTruthy(true));
      assert.isTrue(RA.isTruthy(new Date()));
      assert.isTrue(RA.isTruthy(new Error()));
      assert.isTrue(RA.isTruthy(Array.prototype.slice));
      assert.isTrue(RA.isTruthy({ 0: 1, length: 1 }));
      assert.isTrue(RA.isTruthy(1));
      assert.isTrue(RA.isTruthy(/x/));
      assert.isTrue(RA.isTruthy(Symbol));
      assert.isTrue(RA.isTruthy({}));
      assert.isTrue(RA.isTruthy([]));
      assert.isTrue(RA.isTruthy(Infinity));
    });
  });

  context('given a falsy value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isTruthy(false));
      assert.isFalse(RA.isTruthy(0));
      assert.isFalse(RA.isTruthy(-0));
      assert.isFalse(RA.isTruthy(''));
      assert.isFalse(RA.isTruthy(null));
      assert.isFalse(RA.isTruthy(undefined));
      assert.isFalse(RA.isTruthy(NaN));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isTruthy = RA.isTruthy(R.__);

    assert.isTrue(isTruthy(true));
  });
});
