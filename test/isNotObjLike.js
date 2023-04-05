import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isNotObjLike', function () {
  context('given a value with non object-like interface', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotObjLike(Array.prototype.slice));
      assert.isTrue(RA.isNotObjLike(null));
      assert.isTrue(RA.isNotObjLike(undefined));
      assert.isTrue(RA.isNotObjLike(Symbol));
    });
  });

  context('given a value with object-like interface', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotObjLike({}));
      assert.isFalse(RA.isNotObjLike(Object(false)));
      assert.isFalse(RA.isNotObjLike(args));
      assert.isFalse(RA.isNotObjLike([1, 2, 3]));
      assert.isFalse(RA.isNotObjLike(Object(false)));
      assert.isFalse(RA.isNotObjLike(new Date()));
      assert.isFalse(RA.isNotObjLike(new Error()));
      assert.isFalse(RA.isNotObjLike(RA));
      assert.isFalse(RA.isNotObjLike({ a: 1 }));
      assert.isFalse(RA.isNotObjLike(Object(0)));
      assert.isFalse(RA.isNotObjLike(/x/));
      assert.isFalse(RA.isNotObjLike(Object('a')));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotObjLike = RA.isNotObjLike(R.__);

    assert.isTrue(isNotObjLike(null));
  });
});

describe('isNotObjectLike', function () {
  it('should be an alias for isNotObjLike', function () {
    assert.strictEqual(RA.isNotObjLike, RA.isNotObjectLike);
  });
});
