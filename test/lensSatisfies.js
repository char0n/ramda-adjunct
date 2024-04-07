import { assert } from 'chai';
import { lensIndex, lensPath, lensProp, equals, pathEq } from 'ramda';

import * as RA from '../src/index.js';

describe('lensSatisfies', function () {
  context(
    'given a data structure which is satisfying the predicate',
    function () {
      specify('should return true', function () {
        assert.isTrue(
          RA.lensSatisfies(equals('bar'), lensProp('foo'), { foo: 'bar' })
        );
        assert.isTrue(RA.lensSatisfies((x) => x > 0, lensIndex(1), [0, 1, 2]));
        assert.isTrue(
          RA.lensSatisfies(pathEq(42, ['foo', 'bar']), lensPath(['o1', 'o2']), {
            o1: { o2: { foo: { bar: 42 } } },
          })
        );
      });
    }
  );

  context(
    'given a data structure which is not satisfying the predicate',
    function () {
      specify('should return false', function () {
        assert.isFalse(
          RA.lensSatisfies(equals('foo'), lensProp('bar'), { foo: 'bar' })
        );
        assert.isFalse(RA.lensSatisfies((x) => x > 0, lensIndex(0), [0, 1, 2]));
      });
    }
  );

  it('should be curried', function () {
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
