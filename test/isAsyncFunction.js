import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import args from './shared/arguments.js';
import asyncFunc from './shared/asyncFunc.js';

describe('isAsyncFunction', function () {
  context('given `Async Function`', function () {
    specify('should return true', function () {
      assert.strictEqual(
        RA.isAsyncFunction(asyncFunc),
        typeof asyncFunc === 'function'
      );
    });
  });

  context('given non `Async Function`', function () {
    specify('should return false', function () {
      assert.strictEqual(
        RA.isAsyncFunction(asyncFunc),
        typeof asyncFunc === 'function'
      );
      assert.isFalse(RA.isAsyncFunction(args));
      assert.isFalse(RA.isAsyncFunction([1, 2, 3]));
      assert.isFalse(RA.isAsyncFunction(true));
      assert.isFalse(RA.isAsyncFunction(new Date()));
      assert.isFalse(RA.isAsyncFunction(new Error()));
      assert.isFalse(RA.isAsyncFunction(Array.prototype.slice));
      assert.isFalse(RA.isAsyncFunction({ 0: 1, length: 1 }));
      assert.isFalse(RA.isAsyncFunction(1));
      assert.isFalse(RA.isAsyncFunction(/x/));
      assert.isFalse(RA.isAsyncFunction(Symbol));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isAsyncFunction = RA.isAsyncFunction(R.__);

    assert.strictEqual(
      isAsyncFunction(asyncFunc),
      typeof asyncFunc === 'function'
    );
  });
});
