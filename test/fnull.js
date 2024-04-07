import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('fnull', function () {
  context('given function and default arguments', function () {
    specify('should use argument or appropriate default argument', function () {
      assert.strictEqual(RA.fnull(R.add, [1, 1])(1, 2), 3);
      assert.strictEqual(RA.fnull(R.add, [1, 1])(null, 2), 3);
      assert.strictEqual(RA.fnull(R.add, [1, 1])(2, null), 3);
      assert.strictEqual(RA.fnull(R.add, [1, 1])(null, undefined), 2);
    });
  });

  it('should curry', function () {
    const add = (a, b) => a + b;

    assert.strictEqual(RA.fnull(add, [1, 1])(1, 2), 3);
    assert.strictEqual(RA.fnull(add)([1, 1])(1, 3), 4);
  });

  it('should return curried function', function () {
    const fn = RA.fnull(R.add, [1, 1]);

    assert.lengthOf(fn, 2);
    assert.strictEqual(fn(1, 1), 2);
    assert.strictEqual(fn(1)(1), 2);
  });
});
