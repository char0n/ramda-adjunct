import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('notEqual', function () {
  context('given two non-equivalent values', function () {
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

  context('given two equivalent values', function () {
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
    assert.isFalse(RA.notEqual(1, 1));
    assert.isFalse(RA.notEqual(1)(1));
  });
});
