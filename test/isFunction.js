import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';
import genFunc from './shared/genFunc';
import asyncFunc from './shared/asyncFunc';

describe('isFunction', function () {
  it('should test value for a `Function`', function () {
    assert.strictEqual(RA.isFunction(genFunc), typeof genFunc === 'function');
    assert.strictEqual(
      RA.isFunction(asyncFunc),
      typeof asyncFunc === 'function'
    );
    assert.isTrue(RA.isFunction(Symbol));
    assert.isTrue(RA.isFunction(() => {}));
    assert.isTrue(RA.isFunction(function () {}));
    assert.isTrue(RA.isFunction(Array.prototype.slice));
    assert.isFalse(RA.isFunction(args));
    assert.isFalse(RA.isFunction([1, 2, 3]));
    assert.isFalse(RA.isFunction(true));
    assert.isFalse(RA.isFunction(new Date()));
    assert.isFalse(RA.isFunction(new Error()));
    assert.isFalse(RA.isFunction({ 0: 1, length: 1 }));
    assert.isFalse(RA.isFunction(1));
    assert.isFalse(RA.isFunction(/x/));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isFunction = RA.isFunction(R.__);

    assert.strictEqual(isFunction(genFunc), typeof genFunc === 'function');
  });
});
