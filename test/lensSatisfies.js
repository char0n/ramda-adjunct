import { assert } from 'chai';
import { lensIndex, lensPath, lensProp, equals, pathEq } from 'ramda';

import * as RA from '../src';

describe('lensSatisfies', function() {
  it('tests a lens satisfying the predicate', function() {
    assert.isTrue(
      RA.lensSatisfies(equals('bar'), lensProp('foo'), { foo: 'bar' })
    );
    assert.isFalse(
      RA.lensSatisfies(equals('foo'), lensProp('bar'), { foo: 'bar' })
    );

    assert.isTrue(RA.lensSatisfies(x => x > 0, lensIndex(1), [0, 1, 2]));
    assert.isFalse(RA.lensSatisfies(x => x > 0, lensIndex(0), [0, 1, 2]));

    assert.isTrue(
      RA.lensSatisfies(pathEq(['foo', 'bar'], 42), lensPath(['o1', 'o2']), {
        o1: { o2: { foo: { bar: 42 } } },
      })
    );
  });

  it('tests currying', function() {
    assert.isTrue(
      RA.lensSatisfies(equals('bar'))(lensProp('foo'))({ foo: 'bar' })
    );
    assert.isTrue(
      RA.lensSatisfies(equals('bar'), lensProp('foo'))({ foo: 'bar' })
    );
    assert.isTrue(
      RA.lensSatisfies(equals('bar'))(lensProp('foo'))({ foo: 'bar' })
    );
  });
});
