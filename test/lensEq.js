import { assert } from 'chai';
import { lens, lensIndex, lensPath, lensProp, path } from 'ramda';

import * as RA from '../src';

describe('lensEq', function() {
  it('tests a lens for a value', function() {
    assert.isTrue(RA.lensEq(lensIndex(1), 1, [0, 1]));
    assert.isFalse(RA.lensEq(lensIndex(0), 1, [0, 1]));
    assert.isTrue(RA.lensEq(lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } }));
    assert.isFalse(RA.lensEq(lensPath(['b', 'a']), 'foo', { a: { b: 'foo' } }));
    assert.isTrue(RA.lensEq(lens(path(['a']), RA.noop), 'b', { a: 'b' }));
    assert.isFalse(RA.lensEq(lens(path(['a']), RA.noop), 'b', { a: 'c' }));
    assert.isTrue(RA.lensEq(lensProp('foo'), 'bar', { foo: 'bar' }));
    assert.isFalse(RA.lensEq(lensProp('foo'), 'bar', { bar: 'foo' }));
  });

  it('tests currying', function() {
    assert.isTrue(RA.lensEq(lensIndex(1))(1)([0, 1]));
    assert.isTrue(RA.lensEq(lensIndex(1), 1)([0, 1]));
    assert.isTrue(RA.lensEq(lensIndex(1))(1, [0, 1]));
  });
});
