import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('invoke', function () {
  const testObj = {
    innerObj: {
      method(a = 1, b = 2, c = 3) {
        return a + b + c;
      },
    },
    method(a = 2, b = 4, c = 6) {
      return a + b + c;
    },
    methodWithoutArgs() {
      return 1;
    },
    notAMethod: 'Hello',
  };

  const testFunc = (a = 1, b = 2) => a + b;

  const testContextObj = {
    prop: 1,
    method(val = 1) {
      return this.prop + this.prop + val;
    },
    methodWithoutDefaultArg(val) {
      return this.prop + this.prop + val;
    },
  };

  it('should invoke the method at path of object with no arguments', function () {
    assert.isNaN(RA.invoke(['abs'], Math));
    assert.strictEqual(RA.invoke(['method'], testObj), 12);
    assert.strictEqual(RA.invoke(['innerObj', 'method'], testObj), 6);
    assert.strictEqual(RA.invoke(['methodWithoutArgs'], testObj), 1);
  });

  it('should be safe', function () {
    assert.isUndefined(
      RA.invoke(['path', 'to', 'non-existent', 'method'], Math)
    );
    assert.isUndefined(RA.invoke(['unknown'], testObj));
    assert.isUndefined(RA.invoke(['notAMethod'], testObj));
    assert.isUndefined(RA.invoke([], testObj));
    assert.isUndefined(RA.invoke(['notAMethod'], 'testObj'));
    assert.isUndefined(RA.invoke(['innerObj', 'method', 'unknown'], testObj));
  });

  it('should be bounded to the context', function () {
    assert.strictEqual(RA.invoke(['method'], testContextObj), 3);
    assert.isNaN(RA.invoke(['methodWithoutDefaultArg'], testContextObj));
  });

  it('should be compatible with another invoke libraries methods', function () {
    assert.isUndefined(RA.invoke([], testFunc));
  });

  it('should be curried', function () {
    assert.isNaN(RA.invoke(['abs'])(Math));
    assert.isNaN(RA.invoke(['abs'], Math));
  });
});
