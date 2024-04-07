import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('rangeStep', function () {
  it('should generate proper range', function () {
    assert.deepEqual(RA.rangeStep(1, 0, 4), [0, 1, 2, 3]);
    assert.deepEqual(RA.rangeStep(-1, 0, -4), [0, -1, -2, -3]);
    assert.deepEqual(RA.rangeStep(1, 1, 5), [1, 2, 3, 4]);
    assert.deepEqual(RA.rangeStep(5, 0, 20), [0, 5, 10, 15]);
    assert.deepEqual(RA.rangeStep(-1, 0, -4), [0, -1, -2, -3]);
    assert.deepEqual(RA.rangeStep(0, 1, 4), [1, 1, 1]);
    assert.deepEqual(RA.rangeStep(0, -1, 4), [-1, -1, -1, -1, -1]);
    assert.deepEqual(RA.rangeStep(-1, -3, -6), [-3, -4, -5]);
    assert.deepEqual(RA.rangeStep(1, -1, 1), [-1, 0]);
    assert.isEmpty(RA.rangeStep(1, 0, 0));
  });

  it('should curry', function () {
    assert.deepEqual(RA.rangeStep(1, 0, 4), [0, 1, 2, 3]);
    assert.deepEqual(RA.rangeStep(1)(0, 4), [0, 1, 2, 3]);
    assert.deepEqual(RA.rangeStep(1, 0)(4), [0, 1, 2, 3]);
    assert.deepEqual(RA.rangeStep(1)(0)(4), [0, 1, 2, 3]);
  });
});
