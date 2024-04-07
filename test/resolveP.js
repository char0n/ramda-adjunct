import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('resolveP', function () {
  it('should resolve with no arguments', function () {
    return RA.resolveP().then((actual) => assert.isUndefined(actual));
  });

  it('should resolve thenable values', function () {
    return RA.resolveP(Promise.resolve(1)).then((actual) =>
      assert.strictEqual(actual, 1)
    );
  });

  it('should resolve the only argument', function () {
    const testNumber = RA.resolveP(1);
    const testString = RA.resolveP('a');
    const testArray = RA.resolveP([1, 2, 3]);
    const testObj = RA.resolveP({ a: 1 });

    return Promise.all([testNumber, testString, testArray, testObj]);
  });
});
