import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('invokeArgs', function () {
  const testObj = {
    innerObj: {
      method: function (a, b, c) {
        return a + b + c;
      },
    },
    method: function (a, b, c) {
      return a + b + c;
    },
    notAMethod: 'Hello',
  };

  const testFunc = (a, b) => a + b;

  it('should invoke the method at path of object with given arguments', function () {
    assert.strictEqual(RA.invokeArgs(['abs'], [-1], Math), 1);
    assert.strictEqual(RA.invokeArgs(['method'], [1, 2, 3], testObj), 6);
    assert.strictEqual(
      RA.invokeArgs(['innerObj', 'method'], [1, 2, 3], testObj),
      6
    );
    assert.strictEqual(RA.invokeArgs([], [1, 2], testFunc), 3);
  });

  it('should be safe', function () {
    assert.isUndefined(RA.invokeArgs(['nonexistentMethod'], [-1], Math));
    assert.isUndefined(RA.invokeArgs(['unknown'], [1, 2, 3], testObj));
    assert.isUndefined(RA.invokeArgs(['notAMethod'], [1, 2, 3], testObj));
    assert.isUndefined(RA.invokeArgs([], [1, 2, 3], testObj));
    assert.isUndefined(RA.invokeArgs(['notAMethod'], [1, 2, 3], 'testObj'));
    assert.isUndefined(
      RA.invokeArgs(['innerObj', 'method', 'unknown'], [1, 2, 3], testObj)
    );
  });

  it('should be curried', function () {
    assert.strictEqual(RA.invokeArgs(['abs'], [-1])(Math), 1);
    assert.strictEqual(RA.invokeArgs(['abs'])([-1], Math), 1);
    assert.strictEqual(RA.invokeArgs(['abs'])([-1])(Math), 1);
  });
});
