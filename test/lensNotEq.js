import { lens, lensIndex, lensPath, lensProp, path } from 'ramda';

import RA from '../src/index';
import eq from './shared/eq';


describe('lensNotEq', function() {
  it('tests a lens for a value', function() {
    eq(RA.lensNotEq(lensIndex(1), 1, [0, 1]), false);
    eq(RA.lensNotEq(lensIndex(0), 1, [0, 1]), true);
    eq(RA.lensNotEq(lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } }), false);
    eq(RA.lensNotEq(lensPath(['b', 'a']), 'foo', { a: { b: 'foo' } }), true);
    eq(RA.lensNotEq(lens(path(['a']), RA.noop), 'b', { a: 'b' }), false);
    eq(RA.lensNotEq(lens(path(['a']), RA.noop), 'b', { a: 'c' }), true);
    eq(RA.lensNotEq(lensProp('foo'), 'bar', { foo: 'bar' }), false);
    eq(RA.lensNotEq(lensProp('foo'), 'bar', { bar: 'foo' }), true);
  });

  it('tests currying', function() {
    eq(RA.lensNotEq(lensIndex(1))(1)([0, 1]), false);
    eq(RA.lensNotEq(lensIndex(1), 1)([0, 1]), false);
    eq(RA.lensNotEq(lensIndex(1))(1, [0, 1]), false);
  });
});
