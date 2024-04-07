import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('invokeArgs', function () {
  const testObj = {
    innerObj: {
      method(a, b, c) {
        return a + b + c;
      },
    },
    method(a, b, c) {
      return a + b + c;
    },
    methodWithoutArgs() {
      return 1;
    },
    notAMethod: 'Hello',
  };

  const testFunc = (a, b) => a + b;

  const testContextObj = {
    prop: 1,
    method(val) {
      return this.prop + this.prop + val;
    },
  };

  it('should invoke the method at path of object with given arguments', function () {
    assert.strictEqual(RA.invokeArgs(['abs'], [-1], Math), 1);
    assert.strictEqual(RA.invokeArgs(['method'], [1, 2, 3], testObj), 6);
    assert.strictEqual(
      RA.invokeArgs(['innerObj', 'method'], [1, 2, 3], testObj),
      6
    );
    assert.strictEqual(RA.invokeArgs(['methodWithoutArgs'], [], testObj), 1);
  });

  it('should be safe', function () {
    assert.isUndefined(
      RA.invokeArgs(['path', 'to', 'non-existent', 'method'], [-1], Math)
    );
    assert.isUndefined(RA.invokeArgs(['unknown'], [1, 2, 3], testObj));
    assert.isUndefined(RA.invokeArgs(['notAMethod'], [1, 2, 3], testObj));
    assert.isUndefined(RA.invokeArgs([], [1, 2, 3], testObj));
    assert.isUndefined(RA.invokeArgs(['notAMethod'], [1, 2, 3], 'testObj'));
    assert.isUndefined(
      RA.invokeArgs(['innerObj', 'method', 'unknown'], [1, 2, 3], testObj)
    );
  });

  it('should be bounded to the context', function () {
    assert.strictEqual(RA.invokeArgs(['method'], [1], testContextObj), 3);
  });

  it('should be compatible with another invoke libraries methods', function () {
    assert.isUndefined(RA.invokeArgs([], [1, 2], testFunc));
  });

  it('should be curried', function () {
    assert.strictEqual(RA.invokeArgs(['abs'], [-1])(Math), 1);
    assert.strictEqual(RA.invokeArgs(['abs'])([-1], Math), 1);
    assert.strictEqual(RA.invokeArgs(['abs'])([-1])(Math), 1);
  });
});
