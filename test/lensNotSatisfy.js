import { lensIndex, lensPath, lensProp, equals, pathEq } from 'ramda';

import * as RA from '../src';
import eq from './shared/eq';

describe('lensNotSatisfy', function() {
  it('tests a lens not satisfying the predicate', function() {
    eq(
      RA.lensNotSatisfy(equals('bar'), lensProp('foo'), { foo: 'bar' }),
      false
    );
    eq(RA.lensNotSatisfy(equals('foo'), lensProp('bar'), { foo: 'bar' }), true);

    eq(
      RA.lensNotSatisfy(x => x > 0, lensIndex(1), [0, 1, 2]),
      false
    );
    eq(
      RA.lensNotSatisfy(x => x > 0, lensIndex(0), [0, 1, 2]),
      true
    );

    eq(
      RA.lensNotSatisfy(pathEq(['foo', 'bar'], 42), lensPath(['o1', 'o2']), {
        o1: { o2: { foo: { bar: 42 } } },
      }),
      false
    );
  });

  it('tests currying', function() {
    eq(
      RA.lensNotSatisfy(equals('bar'))(lensProp('foo'))({ foo: 'bar' }),
      false
    );
    eq(
      RA.lensNotSatisfy(equals('bar'), lensProp('foo'))({ foo: 'bar' }),
      false
    );
    eq(
      RA.lensNotSatisfy(equals('bar'))(lensProp('foo'))({ foo: 'bar' }),
      false
    );
  });
});
