import { assert } from 'chai';
import { sum, curry } from 'ramda';
import { Reader as reader } from 'monet';

import * as RA from '../src/index.js';

describe('weave', function () {
  const unaryReader = (a) => reader((config) => config + a);
  const binaryReader = (a, b) => reader((config) => config + a + b);
  const variadicReader = (...args) => reader((config) => sum(args) + config);
  const mixedReader = (a, b, ...args) =>
    reader((config) => sum(args.concat(a, b, config)));

  it('should weave a configuration into function', function () {
    const wunaryReader = RA.weave(unaryReader, 1);
    const wbinaryReader = RA.weave(binaryReader, 1);

    assert.strictEqual(wunaryReader(1), 2);
    assert.strictEqual(wbinaryReader(2, 3), 6);
  });

  it('should be curried', function () {
    const wbinaryReader1 = RA.weave(binaryReader, 1);
    const wbinaryReader2 = RA.weave(binaryReader)(1);

    assert.strictEqual(wbinaryReader1(2, 3), 6);
    assert.strictEqual(wbinaryReader2(2, 3), 6);
  });

  it('should support auto-currying on fixed function signature', function () {
    const wbinaryReader = RA.weave(binaryReader, 1);

    assert.strictEqual(wbinaryReader(2, 3), 6);
    assert.strictEqual(wbinaryReader(2)(3), 6);
  });

  it('should support auto-currying on curried fixed function signature', function () {
    const wbinaryReader = RA.weave(curry(binaryReader), 1);

    assert.strictEqual(wbinaryReader(2, 3), 6);
    assert.strictEqual(wbinaryReader(2)(3), 6);
  });

  it('should support auto-currying on variadic function signature', function () {
    const wvariadicReader = RA.weave(variadicReader, 1);

    assert.strictEqual(wvariadicReader(1, 2, 3), 7);
  });

  it('should support auto-currying on curried variadic function signature', function () {
    const wvariadicReader = RA.weave(curry(variadicReader), 1);

    assert.strictEqual(wvariadicReader(1, 2, 3), 7);
  });

  it('should support auto-currying on mixed function signature', function () {
    const wmixedReader = RA.weave(mixedReader, 1);

    assert.strictEqual(wmixedReader(2, 3, 4), 10);
    assert.strictEqual(wmixedReader(2)(3, 4), 10);
  });

  it('should support auto-currying on curried mixed function signature', function () {
    const wmixedReader = RA.weave(curry(mixedReader), 1);

    assert.strictEqual(wmixedReader(2, 3, 4), 10);
    assert.strictEqual(wmixedReader(2)(3, 4), 10);
  });
});
