import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isNotString', function () {
  context('given a non-string value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotString(args));
      assert.isTrue(RA.isNotString([1, 2, 3]));
      assert.isTrue(RA.isNotString(true));
      assert.isTrue(RA.isNotString(new Date()));
      assert.isTrue(RA.isNotString(new Error()));
      assert.isTrue(RA.isNotString(Array.prototype.slice));
      assert.isTrue(RA.isNotString({ 0: 1, length: 1 }));
      assert.isTrue(RA.isNotString(1));
      assert.isTrue(RA.isNotString(/x/));
      assert.isTrue(RA.isNotString(Symbol));
    });
  });

  context('given a string value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotString('abc'));
      assert.isFalse(RA.isNotString(Object('abc')));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotString = RA.isNotString(R.__);

    assert.isTrue(isNotString(null));
  });
});
