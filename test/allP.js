import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('allP', function () {
  context('given no arguments', function () {
    specify('should return reference to itself', function () {
      assert.strictEqual(RA.allP(), RA.allP);
    });
  });

  it('should resolve list of thenable values', async function () {
    const p1 = RA.resolveP(1);
    const p2 = RA.resolveP(2);
    const actual = await RA.allP([p1, p2]);

    assert.deepEqual(actual, [1, 2]);
  });

  it('should resolve list of mixed thenable and non-thenable values', async function () {
    const p1 = RA.resolveP(1);
    const p2 = 2;
    const actual = await RA.allP([p1, p2]);

    assert.deepEqual(actual, [1, 2]);
  });

  it('should resolve list of rejected thenable values', async function () {
    const p1 = RA.resolveP(1);
    const p2 = RA.rejectP(2);

    try {
      await RA.allP([p1, p2]);
      throw new Error('resolving should fail');
    } catch (e) {
      assert.strictEqual(e, 2);
    }
  });

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#Promise.all_fail-fast_behaviour
  it('should have fail-fast behavior', async function () {
    const p1 = new Promise((resolve) => {
      setTimeout(resolve, 10, 'one');
    });
    const p2 = new Promise((resolve) => {
      setTimeout(resolve, 20, 'two');
    });
    const p3 = new Promise((resolve) => {
      setTimeout(resolve, 30, 'three');
    });
    const p4 = new Promise((resolve) => {
      setTimeout(resolve, 40, 'four');
    });
    const p5 = new Promise((resolve, reject) => {
      reject(new Error());
    });

    try {
      await RA.allP([p1, p2, p3, p4, p5]);
      throw new Error('resolving should fail');
    } catch (e) {
      assert.notStrictEqual(e.message, 'resolving should fail');
      assert.instanceOf(e, Error);
    }
  });

  context('given there are two rejections', function () {
    specify('should reject with the first one', async function () {
      const p1 = RA.resolveP(1);
      const p2 = RA.rejectP(1);
      const p3 = RA.rejectP(2);

      try {
        await RA.allP([p1, p2, p3]);
        throw new Error('resolving should fail');
      } catch (e) {
        assert.strictEqual(e, 1);
      }
    });
  });

  it('should support placeholder to specify "gaps"', async function () {
    const allP = RA.allP(R.__);

    assert.deepEqual(await allP([1, 2, 3]), [1, 2, 3]);
  });
});
