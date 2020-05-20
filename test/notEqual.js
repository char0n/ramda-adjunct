import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('notEqual', function () {
  context('when given two non-equivalent values', function () {
    specify('should return true', function () {
      assert.isTrue(RA.notEqual(1, '1'));
      assert.isTrue(RA.notEqual(1, 2));
      assert.isTrue(RA.notEqual([1], [2]));
      assert.isTrue(RA.notEqual(null, undefined));
      assert.isTrue(RA.notEqual({ key: 'value1' }, { key: 'value2' }));
      assert.isTrue(RA.notEqual(new Set([1]), new Set([1, 2])));
      assert.isTrue(
        RA.notEqual(
          () => {},
          () => {}
        )
      );
    });
  });

  context('when given two equivalent values', function () {
    specify('should return false', function () {
      assert.isFalse(RA.notEqual(1, 1));
      assert.isFalse(RA.notEqual('1', '1'));
      assert.isFalse(RA.notEqual([1], [1]));
      assert.isFalse(RA.notEqual({ key: 'value' }, { key: 'value' }));
      assert.isFalse(RA.notEqual(new Set([1, 2]), new Set([1, 2])));

      const obj = { key: 'value' };
      assert.isFalse(RA.notEqual(obj, obj));

      const a = {};
      a.v = a;
      const b = {};
      b.v = b;

      assert.isFalse(RA.notEqual(a, b));
    });
  });

  it('should support currying', function () {
    const notEqualTo1 = RA.notEqual(1);

    assert.isFalse(notEqualTo1(1));
    assert.isTrue(notEqualTo1('1'));
  });

  it('should support placeholder to specify "gaps"', function () {
    let notEqual = RA.notEqual(R.__, 1);

    assert.isFalse(notEqual(1));
    assert.isTrue(notEqual('1'));

    notEqual = RA.notEqual(1, R.__);

    assert.isFalse(notEqual(1));
    assert.isTrue(notEqual('1'));
  });
});
