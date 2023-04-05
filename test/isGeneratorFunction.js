import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';
import genFunc from './shared/genFunc';

describe('isGeneratorFunction', function () {
  it('should tests value for a `Generator Function`', function () {
    assert.strictEqual(
      RA.isGeneratorFunction(genFunc),
      typeof genFunc === 'function'
    );
    assert.isFalse(RA.isGeneratorFunction(args));
    assert.isFalse(RA.isGeneratorFunction([1, 2, 3]));
    assert.isFalse(RA.isGeneratorFunction(true));
    assert.isFalse(RA.isGeneratorFunction(new Date()));
    assert.isFalse(RA.isGeneratorFunction(new Error()));
    assert.isFalse(RA.isGeneratorFunction(Array.prototype.slice));
    assert.isFalse(RA.isGeneratorFunction({ 0: 1, length: 1 }));
    assert.isFalse(RA.isGeneratorFunction(1));
    assert.isFalse(RA.isGeneratorFunction(/x/));
    assert.isFalse(RA.isGeneratorFunction(Symbol));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isGeneratorFunction = RA.isGeneratorFunction(R.__);

    assert.strictEqual(
      isGeneratorFunction(genFunc),
      typeof genFunc === 'function'
    );
  });
});
