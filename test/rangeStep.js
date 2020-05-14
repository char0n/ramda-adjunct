import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('rangeStep', function () {
  context('given coherent start, stop and step values', function () {
    specify('should return a list of numbers', function () {
      assert.deepEqual(RA.rangeStep(0, 4, 1), [0, 1, 2, 3, 4]);
      assert.deepEqual(RA.rangeStep(4, 0, -1), [4, 3, 2, 1, 0]);
      assert.deepEqual(RA.rangeStep(1, 4, 1), [1, 2, 3, 4]);
      assert.deepEqual(RA.rangeStep(2, 8, 2), [2, 4, 6, 8]);
      assert.deepEqual(RA.rangeStep(0, 10, 3), [0, 3, 6, 9]);
      assert.deepEqual(RA.rangeStep(3, -3, -2), [3, 1, -1, -3]);

      assert.deepEqual(RA.rangeStep(0, 0, 1), [0]);
      assert.deepEqual(RA.rangeStep(0, 0, 100000), [0]);
      assert.deepEqual(RA.rangeStep(0, 0, -1), [0]);
      assert.deepEqual(RA.rangeStep(0, 0, -100000), [0]);

      assert.deepEqual(RA.rangeStep(0, 4, 0.5), [
        0.0,
        0.5,
        1.0,
        1.5,
        2.0,
        2.5,
        3.0,
        3.5,
        4.0,
      ]);
      assert.deepEqual(RA.rangeStep(4, 0, -0.5), [
        4.0,
        3.5,
        3.0,
        2.5,
        2.0,
        1.5,
        1.0,
        0.5,
        0.0,
      ]);
    });
  });

  context('given inconsistent start, stop and step values', function () {
    specify('should return an empty list', function () {
      let result = RA.rangeStep(4, 0, 1);
      assert.isArray(result);
      assert.isEmpty(result);

      result = RA.rangeStep(0, 4, -1);
      assert.isArray(result);
      assert.isEmpty(result);

      result = RA.rangeStep(0, -4, 1);
      assert.isArray(result);
      assert.isEmpty(result);

      result = RA.rangeStep(-4, 0, -1);
      assert.isArray(result);
      assert.isEmpty(result);

      result = RA.rangeStep(-1, 0, -1);
      assert.isArray(result);
      assert.isEmpty(result);

      result = RA.rangeStep(-1, 0, -1000);
      assert.isArray(result);
      assert.isEmpty(result);

      result = RA.rangeStep(1, -1, 1);
      assert.isArray(result);
      assert.isEmpty(result);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    let rangeStep = RA.rangeStep(R.__);
    const expected = [0, 1, 2, 3, 4];

    assert.deepEqual(rangeStep(0, 4, 1), expected);

    rangeStep = RA.rangeStep(0, R.__);
    assert.deepEqual(rangeStep(4, 1), expected);

    rangeStep = RA.rangeStep(R.__, 4);
    assert.deepEqual(rangeStep(0, 1), expected);

    rangeStep = RA.rangeStep(0, R.__, 1);
    assert.deepEqual(rangeStep(4), expected);

    rangeStep = RA.rangeStep(R.__, 4, 1);
    assert.deepEqual(rangeStep(0), expected);

    rangeStep = RA.rangeStep(R.__, R.__, 1);
    assert.deepEqual(rangeStep(0, 4), expected);

    rangeStep = RA.rangeStep(0, R.__, R.__);
    assert.deepEqual(rangeStep(4, 1), expected);

    rangeStep = RA.rangeStep(R.__, R.__, R.__);
    assert.deepEqual(rangeStep(0, 4, 1), expected);
  });

  it('should support currying', function () {
    let rangeStep = RA.rangeStep(0);
    const expected = [0, 1, 2, 3, 4];

    rangeStep = rangeStep(4);
    assert.deepEqual(rangeStep(1), expected);

    rangeStep = RA.rangeStep(0, 4);
    assert.deepEqual(rangeStep(1), expected);

    rangeStep = RA.rangeStep(0);
    assert.deepEqual(rangeStep(4, 1), expected);
  });
});
