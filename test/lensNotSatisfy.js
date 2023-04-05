import { assert } from 'chai';
import { lensIndex, lensPath, lensProp, equals, pathEq } from 'ramda';

import * as RA from '../src';

describe('lensNotSatisfy', function () {
  context(
    'given a data structure which is not satisfying the predicate',
    function () {
      specify('should return true', function () {
        assert.isTrue(
          RA.lensNotSatisfy(equals('foo'), lensProp('bar'), { foo: 'bar' })
        );
        assert.isTrue(RA.lensNotSatisfy((x) => x > 0, lensIndex(0), [0, 1, 2]));
      });
    }
  );

  context(
    'given a data structure which is satisfying the predicate',
    function () {
      specify('should return false', function () {
        assert.isFalse(
          RA.lensNotSatisfy(equals('bar'), lensProp('foo'), { foo: 'bar' })
        );
        assert.isFalse(
          RA.lensNotSatisfy((x) => x > 0, lensIndex(1), [0, 1, 2])
        );
        assert.isFalse(
          RA.lensNotSatisfy(
            pathEq(42, ['foo', 'bar']),
            lensPath(['o1', 'o2']),
            {
              o1: { o2: { foo: { bar: 42 } } },
            }
          )
        );
      });
    }
  );

  it('should be curried', function () {
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
