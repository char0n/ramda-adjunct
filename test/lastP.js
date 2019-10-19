import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('lastP', function() {
  context('given list of fulfilled promises', function() {
    specify(
      'should return the result of the last fulfilled promise',
      async function() {
        const p1 = new Promise(resolve => setTimeout(resolve, 20, 'one'));
        const p2 = new Promise(resolve => setTimeout(resolve, 40, 'two'));
        const p3 = RA.resolveP(3);
        const p4 = new Promise(resolve => setTimeout(resolve, 10, 'four'));
        const iterable = [p1, p2, p3, p4];
        const slowest = 'two';

        assert.strictEqual(await RA.lastP(iterable), slowest);
      }
    );
  });

  context('given list of rejected promises', function() {
    specify('should fail with a list of rejected reasons', async function() {
      const p1 = RA.rejectP(1);
      const p2 = RA.rejectP(2);
      const p3 = RA.rejectP(3);
      const iterable = [p1, p2, p3];
      const rejections = [1, 2, 3];

      try {
        await RA.lastP(iterable);
        throw new Error('resolving should fail');
      } catch (e) {
        assert.notStrictEqual(e.message, 'resolving should fail');
        assert.deepEqual(e, rejections);
      }
    });
  });

  context('given list of fulfilled and rejected promises', function() {
    specify(
      'should return the result of the last fulfilled promise',
      async function() {
        const p1 = new Promise(resolve => setTimeout(resolve, 20, 1));
        const p2 = RA.rejectP(2);
        const p3 = RA.resolveP(3);
        const p4 = RA.rejectP(4);
        const iterable = [p1, p2, p3, p4];
        const slowest = 1;

        assert.strictEqual(await RA.lastP(iterable), slowest);
      }
    );
  });

  context('given list of values', function() {
    specify('should return the last value', async function() {
      const v1 = 1;
      const v2 = 2;
      const v3 = 3;
      const iterable = [v1, v2, v3];
      const last = 3;

      assert.strictEqual(await RA.lastP(iterable), last);
    });
  });

  context('given large number of promises', function() {
    specify('should handle them properly', async function() {
      const slowest = 300;
      const list = R.range(1, 1000);
      const iterable = list.map(
        R.ifElse(
          R.equals(slowest),
          () => new Promise(resolve => setTimeout(resolve, 100, slowest)),
          RA.resolveP
        )
      );
      assert.strictEqual(await RA.lastP(iterable), slowest);
    });
  });

  context('given an empty iterable', function() {
    specify('should resolve undefined', async function() {
      const iterable = [];
      assert.isUndefined(await RA.lastP(iterable));
    });
  });

  it('should support placeholder to specify "gaps"', async function() {
    const lastP = RA.lastP(R.__);
    const p1 = RA.resolveP(1);
    const v2 = 2;
    const p3 = RA.resolveP(3);
    const actual = [p1, v2, p3];
    const expected = 3;

    assert.strictEqual(await lastP(actual), expected);
  });
});
