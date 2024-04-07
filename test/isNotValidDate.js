import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import args from './shared/arguments.js';

describe('isNotValidDate', function () {
  context('given a non-date value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotValidDate(new Date('a')));
      assert.isTrue(RA.isNotValidDate(Date.now()));
      assert.isTrue(RA.isNotValidDate(args));
      assert.isTrue(RA.isNotValidDate([1, 2, 3]));
      assert.isTrue(RA.isNotValidDate(Object(true)));
      assert.isTrue(RA.isNotValidDate(new Error()));
      assert.isTrue(RA.isNotValidDate(RA));
      assert.isTrue(RA.isNotValidDate(Array.prototype.slice));
      assert.isTrue(RA.isNotValidDate({ a: 1 }));
      assert.isTrue(RA.isNotValidDate(Object(0)));
      assert.isTrue(RA.isNotValidDate(/x/));
      assert.isTrue(RA.isNotValidDate(Object('a')));
      assert.isTrue(RA.isNotValidDate(Symbol));
      assert.isTrue(RA.isNotValidDate(null));
      assert.isTrue(RA.isNotValidDate(undefined));
    });
  });

  context('given a date value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotValidDate(new Date()));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotValidDate = RA.isNotValidDate(R.__);

    assert.isTrue(isNotValidDate(null));
  });
});

describe('isInvalidDate', function () {
  it('should be an alias for isNotValidDate', function () {
    assert.strictEqual(RA.isNotValidDate, RA.isInvalidDate);
  });
});
