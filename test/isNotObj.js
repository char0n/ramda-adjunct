import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isNotObj', function () {
  context('given non object value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotObj(null));
      assert.isTrue(RA.isNotObj(undefined));
    });
  });

  context('given object value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotObj({}));
      assert.isFalse(RA.isNotObj(Object(false)));
      assert.isFalse(RA.isNotObj(Object.create(null)));
      assert.isFalse(RA.isNotObj(args));
      assert.isFalse(RA.isNotObj([1, 2, 3]));
      assert.isFalse(RA.isNotObj(Object(false)));
      assert.isFalse(RA.isNotObj(new Date()));
      assert.isFalse(RA.isNotObj(new Error()));
      assert.isFalse(RA.isNotObj(RA));
      assert.isFalse(RA.isNotObj(Array.prototype.slice));
      assert.isFalse(RA.isNotObj({ a: 1 }));
      assert.isFalse(RA.isNotObj(Object(0)));
      assert.isFalse(RA.isNotObj(/x/));
      assert.isFalse(RA.isNotObj(Object('a')));
      assert.isFalse(RA.isNotObj(Symbol));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotObj = RA.isNotObj(R.__);

    assert.isTrue(isNotObj(null));
  });
});

describe('isNotObject', function () {
  it('should be an alias for isNotObject', function () {
    assert.strictEqual(RA.isNotObj, RA.isNotObject);
  });
});
