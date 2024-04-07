import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import args from './shared/arguments.js';
import genFunc from './shared/genFunc.js';

describe('isNotGeneratorFunction', function () {
  it('should tests value for a `Generator Function`', function () {
    assert.strictEqual(
      RA.isNotGeneratorFunction(genFunc),
      typeof genFunc !== 'function'
    );

    assert.isTrue(RA.isNotGeneratorFunction(args));
    assert.isTrue(RA.isNotGeneratorFunction([1, 2, 3]));
    assert.isTrue(RA.isNotGeneratorFunction(true));
    assert.isTrue(RA.isNotGeneratorFunction(new Date()));
    assert.isTrue(RA.isNotGeneratorFunction(new Error()));
    assert.isTrue(RA.isNotGeneratorFunction(Array.prototype.slice));
    assert.isTrue(RA.isNotGeneratorFunction({ 0: 1, length: 1 }));
    assert.isTrue(RA.isNotGeneratorFunction(1));
    assert.isTrue(RA.isNotGeneratorFunction(/x/));
    assert.isTrue(RA.isNotGeneratorFunction(Symbol));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotGeneratorFunction = RA.isNotGeneratorFunction(R.__);

    assert.strictEqual(
      isNotGeneratorFunction(genFunc),
      typeof genFunc !== 'function'
    );
  });
});
