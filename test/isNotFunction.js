import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import Symbol from './shared/Symbol';
import args from './shared/arguments';
import genFunc from './shared/genFunc';
import asyncFunc from './shared/asyncFunc';

describe('isNotFunction', function () {
  it('should test value for a `Function`', function () {
    assert.strictEqual(
      RA.isNotFunction(genFunc),
      typeof genFunc !== 'function'
    );
    assert.strictEqual(
      RA.isNotFunction(asyncFunc),
      typeof asyncFunc !== 'function'
    );
    assert.strictEqual(RA.isNotFunction(Symbol), typeof Symbol !== 'function');

    assert.isFalse(RA.isNotFunction(() => {}));
    assert.isFalse(RA.isNotFunction(function () {}));
    assert.isFalse(RA.isNotFunction(Array.prototype.slice));

    assert.isTrue(RA.isNotFunction(args));
    assert.isTrue(RA.isNotFunction([1, 2, 3]));
    assert.isTrue(RA.isNotFunction(true));
    assert.isTrue(RA.isNotFunction(new Date()));
    assert.isTrue(RA.isNotFunction(new Error()));
    assert.isTrue(RA.isNotFunction({ 0: 1, length: 1 }));
    assert.isTrue(RA.isNotFunction(1));
    assert.isTrue(RA.isNotFunction(/x/));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotFunction = RA.isNotFunction(R.__);

    assert.strictEqual(isNotFunction(genFunc), typeof genFunc !== 'function');
  });
});
