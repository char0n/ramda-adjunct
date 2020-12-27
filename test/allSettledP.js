import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import { allSettledPPonyfill } from '../src/allSettledP';

describe('allSettledP', function () {
  context('given list of fulfilled promises', function () {
    specify('should return list of fulfilled values', async function () {
      const p1 = RA.resolveP(1);
      const p2 = RA.resolveP(2);
      const p3 = RA.resolveP(3);
      const actual = [p1, p2, p3];
      const expected = [
        { status: 'fulfilled', value: 1 },
        { status: 'fulfilled', value: 2 },
        { status: 'fulfilled', value: 3 },
      ];

      assert.deepEqual(await RA.allSettledP(actual), expected);
    });
  });

  context('given list of rejected promises', function () {
    specify('should return list of rejected reasons', async function () {
      const p1 = RA.rejectP(1);
      const p2 = RA.rejectP(2);
      const p3 = RA.rejectP(3);
      const actual = [p1, p2, p3];
      const expected = [
        { status: 'rejected', reason: 1 },
        { status: 'rejected', reason: 2 },
        { status: 'rejected', reason: 3 },
      ];

      assert.deepEqual(await RA.allSettledP(actual), expected);
    });
  });

  context('given list of fulfilled and rejected promises', function () {
    specify(
      'should return list of rejected reasons and fulfilled values',
      async function () {
        const p1 = RA.rejectP(1);
        const p2 = RA.resolveP(2);
        const p3 = RA.rejectP(3);
        const actual = [p1, p2, p3];
        const expected = [
          { status: 'rejected', reason: 1 },
          { status: 'fulfilled', value: 2 },
          { status: 'rejected', reason: 3 },
        ];

        assert.deepEqual(await RA.allSettledP(actual), expected);
      }
    );
  });

  context('given list of values', function () {
    specify('should return list of fulfilled values', async function () {
      const v1 = 1;
      const v2 = 2;
      const v3 = 3;
      const actual = [v1, v2, v3];
      const expected = [
        { status: 'fulfilled', value: 1 },
        { status: 'fulfilled', value: 2 },
        { status: 'fulfilled', value: 3 },
      ];

      assert.deepEqual(await RA.allSettledP(actual), expected);
    });
  });

  context('given list of values and promises', function () {
    specify('should return list of fulfilled values', async function () {
      const p1 = RA.resolveP(1);
      const v2 = 2;
      const p3 = RA.resolveP(3);
      const actual = [p1, v2, p3];
      const expected = [
        { status: 'fulfilled', value: 1 },
        { status: 'fulfilled', value: 2 },
        { status: 'fulfilled', value: 3 },
      ];

      assert.deepEqual(await RA.allSettledP(actual), expected);
    });
  });

  context('given large number of promises', function () {
    specify('should handle them properly', async function () {
      const list = R.range(1, 1000);
      const actual = list.map(RA.resolveP);
      const expected = list.map((value) => ({ status: 'fulfilled', value }));

      assert.deepEqual(await RA.allSettledP(actual), expected);
    });
  });

  it('should support placeholder to specify "gaps"', async function () {
    const allSettledP = RA.allSettledP(R.__);
    const p1 = RA.resolveP(1);
    const v2 = 2;
    const p3 = RA.resolveP(3);
    const actual = [p1, v2, p3];
    const expected = [
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 2 },
      { status: 'fulfilled', value: 3 },
    ];

    assert.deepEqual(await allSettledP(actual), expected);
  });

  context('allSettledPPonyfill', function () {
    context('given list of fulfilled promises', function () {
      specify('should return list of fulfilled values', async function () {
        const p1 = RA.resolveP(1);
        const p2 = RA.resolveP(2);
        const p3 = RA.resolveP(3);
        const actual = [p1, p2, p3];
        const expected = [
          { status: 'fulfilled', value: 1 },
          { status: 'fulfilled', value: 2 },
          { status: 'fulfilled', value: 3 },
        ];

        assert.deepEqual(await allSettledPPonyfill(actual), expected);
      });
    });

    context('given list of rejected promises', function () {
      specify('should return list of rejected reasons', async function () {
        const p1 = RA.rejectP(1);
        const p2 = RA.rejectP(2);
        const p3 = RA.rejectP(3);
        const actual = [p1, p2, p3];
        const expected = [
          { status: 'rejected', reason: 1 },
          { status: 'rejected', reason: 2 },
          { status: 'rejected', reason: 3 },
        ];

        assert.deepEqual(await allSettledPPonyfill(actual), expected);
      });
    });

    context('given list of fulfilled and rejected promises', function () {
      specify(
        'should return list of rejected reasons and fulfilled values',
        async function () {
          const p1 = RA.rejectP(1);
          const p2 = RA.resolveP(2);
          const p3 = RA.rejectP(3);
          const actual = [p1, p2, p3];
          const expected = [
            { status: 'rejected', reason: 1 },
            { status: 'fulfilled', value: 2 },
            { status: 'rejected', reason: 3 },
          ];

          assert.deepEqual(await allSettledPPonyfill(actual), expected);
        }
      );
    });

    context('given list of values', function () {
      specify('should return list of fulfilled values', async function () {
        const v1 = 1;
        const v2 = 2;
        const v3 = 3;
        const actual = [v1, v2, v3];
        const expected = [
          { status: 'fulfilled', value: 1 },
          { status: 'fulfilled', value: 2 },
          { status: 'fulfilled', value: 3 },
        ];

        assert.deepEqual(await allSettledPPonyfill(actual), expected);
      });
    });

    context('given list of values and promises', function () {
      specify('should return list of fulfilled values', async function () {
        const p1 = RA.resolveP(1);
        const v2 = 2;
        const p3 = RA.resolveP(3);
        const actual = [p1, v2, p3];
        const expected = [
          { status: 'fulfilled', value: 1 },
          { status: 'fulfilled', value: 2 },
          { status: 'fulfilled', value: 3 },
        ];

        assert.deepEqual(await allSettledPPonyfill(actual), expected);
      });
    });

    context('given large number of promises', function () {
      specify('should handle them properly', async function () {
        const list = R.range(1, 1000);
        const actual = list.map(RA.resolveP);
        const expected = list.map((value) => ({ status: 'fulfilled', value }));

        assert.deepEqual(await allSettledPPonyfill(actual), expected);
      });
    });

    it('should support placeholder to specify "gaps"', async function () {
      const allSettledP = allSettledPPonyfill(R.__);
      const p1 = RA.resolveP(1);
      const v2 = 2;
      const p3 = RA.resolveP(3);
      const actual = [p1, v2, p3];
      const expected = [
        { status: 'fulfilled', value: 1 },
        { status: 'fulfilled', value: 2 },
        { status: 'fulfilled', value: 3 },
      ];

      assert.deepEqual(await allSettledP(actual), expected);
    });
  });
});
