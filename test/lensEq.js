import { assert } from 'chai';
import { lens, lensIndex, lensPath, lensProp, path } from 'ramda';

import * as RA from '../src/index.js';

describe('lensEq', function () {
  context(
    'given a data structure focused by the given lens equals provided value',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.lensEq(lensIndex(1), 1, [0, 1]));
        assert.isTrue(
          RA.lensEq(lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } })
        );
        assert.isTrue(RA.lensEq(lens(path(['a']), RA.noop), 'b', { a: 'b' }));
        assert.isTrue(RA.lensEq(lensProp('foo'), 'bar', { foo: 'bar' }));
      });
    }
  );

  context(
    'given a data structure focused by the given lens non equals provided value',
    function () {
      specify('should return false', function () {
        assert.isFalse(RA.lensEq(lensIndex(0), 1, [0, 1]));
        assert.isFalse(
          RA.lensEq(lensPath(['b', 'a']), 'foo', { a: { b: 'foo' } })
        );
        assert.isFalse(RA.lensEq(lens(path(['a']), RA.noop), 'b', { a: 'c' }));
        assert.isFalse(RA.lensEq(lensProp('foo'), 'bar', { bar: 'foo' }));
      });
    }
  );

  it('should be curried', function () {
    assert.isTrue(RA.lensEq(lensIndex(1))(1)([0, 1]));
    assert.isTrue(RA.lensEq(lensIndex(1), 1)([0, 1]));
    assert.isTrue(RA.lensEq(lensIndex(1))(1, [0, 1]));
  });
});
