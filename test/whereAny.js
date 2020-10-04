import { assert } from 'chai';
import { __, complement, equals, gt, lt } from 'ramda';

import * as RA from '../src';

describe('whereAny', function () {
  it('should be defined', function () {
    assert.isDefined(RA.whereAny);
  });

  it('should return false if argument is not an object', function () {
    const pred = RA.whereAny({});

    assert.isFalse(pred(undefined));
    assert.isFalse(pred(null));
    assert.isFalse(pred(42));
    assert.isFalse(pred(''));
    assert.isFalse(pred('42'));
  });

  describe('when spec is empty object', function () {
    it('should return true if argument is an object', function () {
      const pred = RA.whereAny({});

      assert.isTrue(pred({}));
      assert.isTrue(pred({ foo: 'bar' }));
    });
  });

  it('should return true when any of predicates matches', function () {
    const pred = RA.whereAny({
      a: equals('foo'),
      b: complement(equals('bar')),
      x: gt(__, 10),
      y: lt(__, 20),
    });

    assert.isTrue(
      pred({
        a: 'foo',
        b: null,
        x: 9,
        y: 21,
      })
    );
    assert.isTrue(
      pred({
        a: null,
        b: 'baz',
        x: 9,
        y: 21,
      })
    );
    assert.isTrue(
      pred({
        a: null,
        b: null,
        x: 11,
        y: 21,
      })
    );
    assert.isTrue(
      pred({
        a: null,
        b: null,
        x: 9,
        y: 19,
      })
    );
  });

  it('should return false when none of predicates matches', function () {
    const pred = RA.whereAny({
      a: equals('foo'),
      b: complement(equals('bar')),
      x: gt(__, 10),
      y: lt(__, 20),
    });

    assert.isFalse(
      pred({
        a: null,
        b: 'bar',
        x: 9,
        y: 21,
      })
    );
  });
});
