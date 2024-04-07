import { assert } from 'chai';
import { lens, lensIndex, lensPath, lensProp, path } from 'ramda';

import * as RA from '../src/index.js';

describe('lensNotEq', function () {
  context('given a value which is not equals a focus of the lens', function () {
    specify('should return true', function () {
      assert.isTrue(RA.lensNotEq(lensIndex(0), 1, [0, 1]));
      assert.isTrue(
        RA.lensNotEq(lensPath(['b', 'a']), 'foo', { a: { b: 'foo' } })
      );
      assert.isTrue(RA.lensNotEq(lens(path(['a']), RA.noop), 'b', { a: 'c' }));
      assert.isTrue(RA.lensNotEq(lensProp('foo'), 'bar', { bar: 'foo' }));
    });
  });

  context('given a value which is equals a focus of the lens', function () {
    specify('should return false', function () {
      assert.isFalse(RA.lensNotEq(lensIndex(1), 1, [0, 1]));
      assert.isFalse(
        RA.lensNotEq(lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } })
      );
      assert.isFalse(RA.lensNotEq(lens(path(['a']), RA.noop), 'b', { a: 'b' }));
      assert.isFalse(RA.lensNotEq(lensProp('foo'), 'bar', { foo: 'bar' }));
    });
  });

  it('should be curried', function () {
    assert.isFalse(RA.lensNotEq(lensIndex(1))(1)([0, 1]));
    assert.isFalse(RA.lensNotEq(lensIndex(1), 1)([0, 1]));
    assert.isFalse(RA.lensNotEq(lensIndex(1))(1, [0, 1]));
  });
});
