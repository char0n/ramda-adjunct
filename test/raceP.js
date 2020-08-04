import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('raceP', function () {
  context('given no arguments', function () {
    specify('should return forever pending Promise', function () {
      RA.raceP([]).then(() => {
        throw new Error('This promise should never resolve');
      });
    });
  });

  it('should resolve list of thenable values', async function () {
    const p1 = RA.resolveP(1);
    const p2 = RA.resolveP(2);
    const actual = await RA.raceP([p1, p2]);

    assert.deepEqual(actual, 1);
  });

  it('should resolve list of mixed thenable and non-thenable values', async function () {
    const p1 = RA.resolveP(1);
    const p2 = 2;
    const actual = await RA.raceP([p1, p2]);

    assert.deepEqual(actual, 1);
  });

  it('should resolve list of rejected thenable values', async function () {
    const p1 = RA.resolveP(1);
    const p2 = RA.rejectP(2);
    const actual = await RA.raceP([p1, p2]);
    assert.deepEqual(actual, 1);

    try {
      await RA.raceP([p2, p1]);
      throw new Error('resolving should fail');
    } catch (e) {
      assert.strictEqual(e, 2);
    }
  });

  context('given more than one value/promise that settles', function () {
    specify('should settle with the first one to settle', async function () {
      const promises = [
        new Promise((res) => setTimeout(() => res(1), 10)),
        new Promise((res) => setTimeout(() => res(2), 5)),
        new Promise((res) => setTimeout(() => res(3), 20)),
      ];
      const actual = await RA.raceP(promises);
      assert.deepEqual(actual, 2);

      const promises2 = [
        // eslint-disable-next-line prefer-promise-reject-errors
        new Promise((_, rej) => setTimeout(() => rej(1), 5)),
        new Promise((res) => setTimeout(() => res(2), 50)),
        new Promise((res) => setTimeout(() => res(3), 20)),
      ];

      try {
        await RA.raceP(promises2);
        throw new Error('resolving should fail');
      } catch (e) {
        assert.strictEqual(e, 1);
      }
    });
  });

  it('should support placeholder to specify "gaps"', async function () {
    const raceP = RA.raceP(R.__);

    assert.deepEqual(await raceP([1, 2, 3]), 1);
  });
});
