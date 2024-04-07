import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

const delay = (ms = 0) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

describe('noneP', function () {
  context('given all promises reject', function () {
    specify('should resolve with the reasons', async function () {
      const reasons = await RA.noneP([
        RA.rejectP(1),
        RA.rejectP('b'),
        RA.rejectP(),
      ]);

      assert.sameOrderedMembers(reasons, [1, 'b', undefined]);
    });
  });

  context('given one promise resolves', function () {
    specify('should reject with the fulfillment value', async function () {
      const value = await RA.noneP([
        RA.rejectP(),
        RA.rejectP(),
        RA.resolveP('oops'),
      ]).then(RA.rejectP, R.identity);

      assert.strictEqual(value, 'oops');
    });
  });

  context('given multiple promises resolve', function () {
    specify(
      'should reject with the fulfillment value of the first resolved promise',
      async function () {
        const value = await RA.noneP([
          RA.rejectP(),
          delay(500).then(() => RA.resolveP('slow')),
          delay(10).then(() => RA.resolveP('fast')),
        ]).then(RA.rejectP, R.identity);

        assert.strictEqual(value, 'fast');
      }
    );
  });

  context('given all promises resolve', function () {
    specify(
      'should reject with the fulfillment value of the first resolved promise',
      async function () {
        const value = await RA.noneP([
          RA.resolveP(1),
          RA.resolveP(2),
          RA.resolveP(3),
        ]).then(RA.rejectP, R.identity);

        assert.strictEqual(value, 1);
      }
    );
  });

  context('given a value that is not a promise', function () {
    specify('should reject with the non-promise value', async function () {
      const value = await RA.noneP([RA.rejectP(1), 2, RA.rejectP(3)]).then(
        RA.rejectP,
        R.identity
      );

      assert.strictEqual(value, 2);
    });
  });

  context('given an empty list', function () {
    specify('should resolve with empty reasons', async function () {
      const value = await RA.noneP([]);

      assert.sameOrderedMembers(value, []);
    });
  });

  it('should support placeholder to specify "gaps"', async function () {
    const noneP = RA.noneP(R.__);
    const p1 = RA.rejectP(1);
    const v2 = RA.rejectP(2);
    const p3 = RA.rejectP(3);
    const actual = [p1, v2, p3];
    const expected = [1, 2, 3];

    assert.sameOrderedMembers(await noneP(actual), expected);
  });
});
