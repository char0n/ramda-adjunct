import { lensIndex, lensPath, lensProp, equals, pathEq } from 'ramda';
import RA from '../src/index';
import eq from './shared/eq';

describe('lensNotSatisfies', function () {
  it('tests value predicament evaluation through lenses', function () {
    eq(RA.lensNotSatisfies(equals('bar'), lensProp('foo'), { foo: 'bar' }), false);
    eq(RA.lensNotSatisfies(equals('foo'), lensProp('bar'), { foo: 'bar' }), true);

    eq(RA.lensNotSatisfies(x => x > 0, lensIndex(1), [0, 1, 2]), false);
    eq(RA.lensNotSatisfies(x => x > 0, lensIndex(0), [0, 1, 2]), true);

    eq(RA.lensNotSatisfies(pathEq(['foo', 'bar'], 42), lensPath(['o1', 'o2']), {
      o1: { o2: { foo: { bar: 42 } } },
    }), false);
  });
});
