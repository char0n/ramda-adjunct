import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import args from './shared/arguments.js';

describe('isString', function () {
  context('given a `String` value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isString('abc'));
      assert.isTrue(RA.isString(Object('abc')));
    });
  });

  context('given a non `String` value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isString(args));
      assert.isFalse(RA.isString([1, 2, 3]));
      assert.isFalse(RA.isString(true));
      assert.isFalse(RA.isString(new Date()));
      assert.isFalse(RA.isString(new Error()));
      assert.isFalse(RA.isString(Array.prototype.slice));
      assert.isFalse(RA.isString({ 0: 1, length: 1 }));
      assert.isFalse(RA.isString(1));
      assert.isFalse(RA.isString(/x/));
      assert.isFalse(RA.isString(Symbol));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isString = RA.isString(R.__);

    assert.isFalse(isString(1));
  });
});
