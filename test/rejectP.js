import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('rejectP', function () {
  const rejectWithError = () =>
    Promise.reject(new Error('Expected method to reject.'));

  it('should reject if provided with no arguments', function () {
    return RA.rejectP()
      .then(rejectWithError)
      .catch((actual) => assert.isUndefined(actual));
  });

  it('should be able to reject thenable values', function () {
    const expected = Promise.resolve(1);
    return RA.rejectP(expected)
      .then(rejectWithError)
      .catch((actual) => assert.deepEqual(actual, expected));
  });

  it('should reject the only argument', function () {
    const testNumber = RA.rejectP(1)
      .then(rejectWithError)
      .catch((actual) => assert.strictEqual(actual, 1));
    const testString = RA.rejectP('a')
      .then(rejectWithError)
      .catch((actual) => assert.strictEqual(actual, 'a'));
    const testArray = RA.rejectP([1, 2, 3])
      .then(rejectWithError)
      .catch((actual) => assert.sameOrderedMembers(actual, [1, 2, 3]));
    const testObj = RA.rejectP({ a: 1 })
      .then(rejectWithError)
      .catch((actual) => assert.deepEqual(actual, { a: 1 }));

    return Promise.all([testNumber, testString, testArray, testObj]);
  });
});
