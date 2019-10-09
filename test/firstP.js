import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import customIterable from './shared/customIterable';

describe('firstP', function() {
  context('given list of fulfilled promises', function() {
    specify(
      'should return the result of the first fulfilled promise',
      async function() {
        const p1 = new Promise(resolve => setTimeout(resolve, 20, 'one'));
        const p2 = new Promise(resolve => setTimeout(resolve, 10, 'two'));
        const p3 = RA.resolveP(3);
        const p4 = new Promise(resolve => setTimeout(resolve, 40, 'four'));
        const actual = [p1, p2, p3, p4];
        const expected = 3;

        assert.strictEqual(await RA.firstP(actual), expected);
      }
    );
  });

  context('given list of rejected promises', function() {
    specify('should fail with a list of rejected reasons', async function() {
      const p1 = RA.rejectP(1);
      const p2 = RA.rejectP(2);
      const p3 = RA.rejectP(3);
      const actual = [p1, p2, p3];
      const expected = [1, 2, 3];

      try {
        await RA.firstP(actual);
        throw new Error('resolving should fail');
      } catch (e) {
        assert.notStrictEqual(e.message, 'resolving should fail');
        assert.deepEqual(e, expected);
      }
    });
  });

  context('given list of fulfilled and rejected promises', function() {
    specify(
      'should return the result of the first fulfilled promise',
      async function() {
        const p1 = RA.rejectP(1);
        const p2 = RA.resolveP(2);
        const p3 = RA.rejectP(3);
        const actual = [p1, p2, p3];
        const expected = 2;

        assert.strictEqual(await RA.firstP(actual), expected);
      }
    );
  });

  context('given list of values', function() {
    specify('should return the first value', async function() {
      const v1 = 1;
      const v2 = 2;
      const v3 = 3;
      const actual = [v1, v2, v3];
      const expected = 1;

      assert.strictEqual(await RA.firstP(actual), expected);
    });
  });

  context('given large number of promises', function() {
    specify('should handle them properly', async function() {
      const list = R.range(1, 1000);
      const actual = list.map(RA.resolveP);
      const expected = list[0];

      assert.strictEqual(await RA.firstP(actual), expected);
    });
  });

  context('given custom iterable', function() {
    specify('should handle them properly', async function() {
      const expected = 1;

      assert.strictEqual(await RA.firstP(customIterable), expected);
    });
  });

  it('should support placeholder to specify "gaps"', async function() {
    const firstP = RA.firstP(R.__);
    const p1 = RA.resolveP(1);
    const v2 = 2;
    const p3 = RA.resolveP(3);
    const actual = [p1, v2, p3];
    const expected = 1;

    assert.strictEqual(await firstP(actual), expected);
  });
});
