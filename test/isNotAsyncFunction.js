import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import args from './shared/arguments.js';
import asyncFunc from './shared/asyncFunc.js';

describe('isNotAsyncFunction', function () {
  context('given async function', function () {
    specify('should return false', function () {
      assert.strictEqual(
        RA.isNotAsyncFunction(asyncFunc),
        typeof asyncFunc !== 'function'
      );
    });
  });

  context('given non async function value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotAsyncFunction(args));
      assert.isTrue(RA.isNotAsyncFunction([1, 2, 3]));
      assert.isTrue(RA.isNotAsyncFunction(true));
      assert.isTrue(RA.isNotAsyncFunction(new Date()));
      assert.isTrue(RA.isNotAsyncFunction(new Error()));
      assert.isTrue(RA.isNotAsyncFunction(Array.prototype.slice));
      assert.isTrue(RA.isNotAsyncFunction({ 0: 1, length: 1 }));
      assert.isTrue(RA.isNotAsyncFunction(1));
      assert.isTrue(RA.isNotAsyncFunction(/x/));
      assert.isTrue(RA.isNotAsyncFunction(Symbol));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotAsyncFunction = RA.isNotAsyncFunction(R.__);

    assert.isTrue(isNotAsyncFunction(-1));
  });
});
