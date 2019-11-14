import { assert } from 'chai';
import { lens, lensIndex, lensPath, lensProp, path } from 'ramda';

import * as RA from '../src';

describe('lensNotEq', function() {
  it('tests a lens for a value', function() {
    assert.isFalse(RA.lensNotEq(lensIndex(1), 1, [0, 1]));
    assert.isTrue(RA.lensNotEq(lensIndex(0), 1, [0, 1]));
    assert.isFalse(
      RA.lensNotEq(lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } })
    );
    assert.isTrue(
      RA.lensNotEq(lensPath(['b', 'a']), 'foo', { a: { b: 'foo' } })
    );
    assert.isFalse(RA.lensNotEq(lens(path(['a']), RA.noop), 'b', { a: 'b' }));
    assert.isTrue(RA.lensNotEq(lens(path(['a']), RA.noop), 'b', { a: 'c' }));
    assert.isFalse(RA.lensNotEq(lensProp('foo'), 'bar', { foo: 'bar' }));
    assert.isTrue(RA.lensNotEq(lensProp('foo'), 'bar', { bar: 'foo' }));
  });

  it('tests currying', function() {
    assert.isFalse(RA.lensNotEq(lensIndex(1))(1)([0, 1]));
    assert.isFalse(RA.lensNotEq(lensIndex(1), 1)([0, 1]));
    assert.isFalse(RA.lensNotEq(lensIndex(1))(1, [0, 1]));
  });
});
