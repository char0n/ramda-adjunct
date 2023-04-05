import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isObjLike', function () {
  context('given a value with object-like interface', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isObjLike({}));
      assert.isTrue(RA.isObjLike(Object(true)));
      assert.isTrue(RA.isObjLike(args));
      assert.isTrue(RA.isObjLike([1, 2, 3]));
      assert.isTrue(RA.isObjLike(Object(false)));
      assert.isTrue(RA.isObjLike(new Date()));
      assert.isTrue(RA.isObjLike(new Error()));
      assert.isTrue(RA.isObjLike(RA));
      assert.isTrue(RA.isObjLike({ a: 1 }));
      assert.isTrue(RA.isObjLike(Object(0)));
      assert.isTrue(RA.isObjLike(/x/));
      assert.isTrue(RA.isObjLike(Object('a')));
    });
  });

  context('given a value with non object-like interface', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isObjLike(Symbol));
      assert.isFalse(RA.isObjLike(Array.prototype.slice));
      assert.isFalse(RA.isObjLike(null));
      assert.isFalse(RA.isObjLike(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isObjLike = RA.isObjLike(R.__);

    assert.isTrue(isObjLike({}));
  });
});

describe('isObjectLike', function () {
  it('should be an alias for isObjLike', function () {
    assert.strictEqual(RA.isObjLike, RA.isObjectLike);
  });
});
