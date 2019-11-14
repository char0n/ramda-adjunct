import { assert } from 'chai';
import { lensIndex, lensPath, lensProp, equals, pathEq } from 'ramda';

import * as RA from '../src';

describe('lensNotSatisfy', function() {
  it('tests a lens not satisfying the predicate', function() {
    assert.isFalse(
      RA.lensNotSatisfy(equals('bar'), lensProp('foo'), { foo: 'bar' })
    );
    assert.isTrue(
      RA.lensNotSatisfy(equals('foo'), lensProp('bar'), { foo: 'bar' })
    );

    assert.isFalse(RA.lensNotSatisfy(x => x > 0, lensIndex(1), [0, 1, 2]));
    assert.isTrue(RA.lensNotSatisfy(x => x > 0, lensIndex(0), [0, 1, 2]));

    assert.isFalse(
      RA.lensNotSatisfy(pathEq(['foo', 'bar'], 42), lensPath(['o1', 'o2']), {
        o1: { o2: { foo: { bar: 42 } } },
      })
    );
  });

  it('tests currying', function() {
    assert.isFalse(
      RA.lensNotSatisfy(equals('bar'))(lensProp('foo'))({ foo: 'bar' })
    );
    assert.isFalse(
      RA.lensNotSatisfy(equals('bar'), lensProp('foo'))({ foo: 'bar' })
    );
    assert.isFalse(
      RA.lensNotSatisfy(equals('bar'))(lensProp('foo'))({ foo: 'bar' })
    );
  });
});
