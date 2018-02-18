import { lens, lensIndex, lensPath, lensProp, path } from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';

describe('lensEq', function() {
  it('tests a lens for a value', function() {
    eq(RA.lensEq(lensIndex(1), 1, [0, 1]), true);
    eq(RA.lensEq(lensIndex(0), 1, [0, 1]), false);
    eq(RA.lensEq(lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } }), true);
    eq(RA.lensEq(lensPath(['b', 'a']), 'foo', { a: { b: 'foo' } }), false);
    eq(RA.lensEq(lens(path(['a']), RA.noop), 'b', { a: 'b' }), true);
    eq(RA.lensEq(lens(path(['a']), RA.noop), 'b', { a: 'c' }), false);
    eq(RA.lensEq(lensProp('foo'), 'bar', { foo: 'bar' }), true);
    eq(RA.lensEq(lensProp('foo'), 'bar', { bar: 'foo' }), false);
  });

  it('tests currying', function() {
    eq(RA.lensEq(lensIndex(1))(1)([0, 1]), true);
    eq(RA.lensEq(lensIndex(1), 1)([0, 1]), true);
    eq(RA.lensEq(lensIndex(1))(1, [0, 1]), true);
  });
});
