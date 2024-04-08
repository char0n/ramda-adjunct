import { assert } from 'chai';
import { sum, curry, always } from 'ramda';
import monet from 'monet';

import * as RA from '../src/index.js';

const { Reader: reader } = monet;

describe('weaveLazy', function () {
  const unaryReader = (a) => reader((config) => config + a);
  const binaryReader = (a, b) => reader((config) => config + a + b);
  const variadicReader = (...args) => reader((config) => sum(args) + config);
  const mixedReader = (a, b, ...args) =>
    reader((config) => sum(args.concat(a, b, config)));

  it('should weave a configuration into function', function () {
    const wunaryReader = RA.weaveLazy(unaryReader, always(1));
    const wbinaryReader = RA.weaveLazy(binaryReader, always(1));

    assert.strictEqual(wunaryReader(1), 2);
    assert.strictEqual(wbinaryReader(2, 3), 6);
  });

  it('should be curried', function () {
    const wbinaryReader1 = RA.weaveLazy(binaryReader, always(1));
    const wbinaryReader2 = RA.weaveLazy(binaryReader)(always(1));

    assert.strictEqual(wbinaryReader1(2, 3), 6);
    assert.strictEqual(wbinaryReader2(2, 3), 6);
  });

  it('should support auto-currying on fixed function signature', function () {
    const wbinaryReader = RA.weaveLazy(binaryReader, always(1));

    assert.strictEqual(wbinaryReader(2, 3), 6);
    assert.strictEqual(wbinaryReader(2)(3), 6);
  });

  it('should support auto-currying on curried fixed function signature', function () {
    const wbinaryReader = RA.weaveLazy(curry(binaryReader), always(1));

    assert.strictEqual(wbinaryReader(2, 3), 6);
    assert.strictEqual(wbinaryReader(2)(3), 6);
  });

  it('should support auto-currying on variadic function signature', function () {
    const wvariadicReader = RA.weaveLazy(variadicReader, always(1));

    assert.strictEqual(wvariadicReader(1, 2, 3), 7);
  });

  it('should support auto-currying on curried variadic function signature', function () {
    const wvariadicReader = RA.weaveLazy(curry(variadicReader), always(1));

    assert.strictEqual(wvariadicReader(1, 2, 3), 7);
  });

  it('should support auto-currying on mixed function signature', function () {
    const wmixedReader = RA.weaveLazy(mixedReader, always(1));

    assert.strictEqual(wmixedReader(2, 3, 4), 10);
    assert.strictEqual(wmixedReader(2)(3, 4), 10);
  });

  it('should support auto-currying on curried mixed function signature', function () {
    const wmixedReader = RA.weaveLazy(curry(mixedReader), always(1));

    assert.strictEqual(wmixedReader(2, 3, 4), 10);
    assert.strictEqual(wmixedReader(2)(3, 4), 10);
  });
});
