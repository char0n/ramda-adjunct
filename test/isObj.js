import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isObj', function () {
  context('given an object value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isObj({}));
      assert.isTrue(RA.isObj(Object(true)));
      assert.isTrue(RA.isObj(Object.create(null)));
      assert.isTrue(RA.isObj(args));
      assert.isTrue(RA.isObj([1, 2, 3]));
      assert.isTrue(RA.isObj(Object(false)));
      assert.isTrue(RA.isObj(new Date()));
      assert.isTrue(RA.isObj(new Error()));
      assert.isTrue(RA.isObj(RA));
      assert.isTrue(RA.isObj(Array.prototype.slice));
      assert.isTrue(RA.isObj({ a: 1 }));
      assert.isTrue(RA.isObj(Object(0)));
      assert.isTrue(RA.isObj(/x/));
      assert.isTrue(RA.isObj(Object('a')));
      assert.isTrue(RA.isObj(Symbol));
    });
  });

  context('given a non-object value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isObj(null));
      assert.isFalse(RA.isObj(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isObj = RA.isObj(R.__);

    assert.isTrue(isObj({}));
  });
});

describe('isObject', function () {
  it('should be an alias for isObj', function () {
    assert.strictEqual(RA.isObj, RA.isObject);
  });
});
