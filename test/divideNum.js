import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('divideNum', function () {
  it('should divide the second number by the first number', function () {
    assert.strictEqual(RA.divideNum(2, 1), 0.5);
    assert.strictEqual(RA.divideNum(2.0, 1.0), 0.5);
    assert.strictEqual(RA.divideNum(0, 2.0), Infinity);
    assert.strictEqual(RA.divideNum(0.0, 2.0), Infinity);
    assert.strictEqual(RA.divideNum(-0.0, 2.0), -Infinity);
  });

  it('should curry', function () {
    assert.strictEqual(RA.divideNum(2)(1), 0.5);
    assert.strictEqual(RA.divideNum(2, 1), 0.5);
  });
});
