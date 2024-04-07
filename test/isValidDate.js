import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import args from './shared/arguments.js';

describe('isValidDate', function () {
  context('given a valid `Date`', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isValidDate(new Date()));
    });
  });

  context('given an invalid `Date` or non `Date`', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isValidDate(new Date('a')));
      assert.isFalse(RA.isValidDate(Date.now()));
      assert.isFalse(RA.isValidDate(args));
      assert.isFalse(RA.isValidDate([1, 2, 3]));
      assert.isFalse(RA.isValidDate(Object(false)));
      assert.isFalse(RA.isValidDate(new Error()));
      assert.isFalse(RA.isValidDate(RA));
      assert.isFalse(RA.isValidDate(Array.prototype.slice));
      assert.isFalse(RA.isValidDate({ a: 1 }));
      assert.isFalse(RA.isValidDate(Object(0)));
      assert.isFalse(RA.isValidDate(/x/));
      assert.isFalse(RA.isValidDate(Object('a')));
      assert.isFalse(RA.isValidDate(Symbol));
      assert.isFalse(RA.isValidDate(null));
      assert.isFalse(RA.isValidDate(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isValidDate = RA.isValidDate(R.__);

    assert.isTrue(isValidDate(new Date()));
  });
});
