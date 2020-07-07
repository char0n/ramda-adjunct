import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import { anyPPonyfill, AggregatedError } from '../src/anyP';

describe('anyP', function () {
  context('given list of fulfilled promises', function () {
    specify('should return first of fulfilled values', async function () {
      const p1 = RA.resolveP(1);
      const p2 = RA.resolveP(2);
      const p3 = RA.resolveP(3);
      const actual = [p1, p2, p3];
      const expected = 1;

      assert.strictEqual(await RA.anyP(actual), expected);
    });
  });

  context('given list of rejected promises', function () {
    specify(
      'should fail with AggregatedError that contains a list of rejected reasons',
      async function () {
        const p1 = RA.rejectP(1);
        const p2 = RA.rejectP(2);
        const p3 = RA.rejectP(3);
        const actual = [p1, p2, p3];
        const expected = [1, 2, 3];

        try {
          await RA.anyP(actual);
          throw new Error('resolving should fail');
        } catch (e) {
          assert.notStrictEqual(e.message, 'resolving should fail');
          assert.instanceOf(e, AggregatedError);
          assert.deepEqual(e.errors, expected);
        }
      }
    );
  });

  context('given list of fulfilled and rejected promises', function () {
    specify('should return first of fulfilled values', async function () {
      const p1 = RA.rejectP(1);
      const p2 = RA.resolveP(2);
      const p3 = RA.rejectP(3);
      const actual = [p1, p2, p3];
      const expected = 2;

      assert.strictEqual(await RA.anyP(actual), expected);
    });
  });

  context('given list of values', function () {
    specify('should return first of fulfilled values', async function () {
      const v1 = 1;
      const v2 = 2;
      const v3 = 3;
      const actual = [v1, v2, v3];
      const expected = 1;

      assert.strictEqual(await RA.anyP(actual), expected);
    });
  });

  context('given list of values and promises', function () {
    specify('should return first of fulfilled values', async function () {
      const p1 = RA.resolveP(1);
      const v2 = 2;
      const p3 = RA.resolveP(3);
      const actual = [p1, v2, p3];
      const expected = 1;

      assert.strictEqual(await RA.anyP(actual), expected);
    });
  });

  context('given large number of promises', function () {
    specify('should handle them properly', async function () {
      const list = R.range(1, 1000);
      const actual = list.map(RA.resolveP);
      const expected = list[0];

      assert.strictEqual(await RA.anyP(actual), expected);
    });
  });

  it('should support placeholder to specify "gaps"', async function () {
    const anyP = RA.anyP(R.__);
    const p1 = RA.resolveP(1);
    const v2 = 2;
    const p3 = RA.resolveP(3);
    const actual = [p1, v2, p3];
    const expected = 1;

    assert.strictEqual(await anyP(actual), expected);
  });

  context('anyPPonyfill', function () {
    context('given list of fulfilled promises', function () {
      specify('should return first of fulfilled values', async function () {
        const p1 = RA.resolveP(1);
        const p2 = RA.resolveP(2);
        const p3 = RA.resolveP(3);
        const actual = [p1, p2, p3];
        const expected = 1;

        assert.strictEqual(await anyPPonyfill(actual), expected);
      });
    });

    context('given list of rejected promises', function () {
      specify(
        'should fail with AggregatedError that contains a list of rejected reasons',
        async function () {
          const p1 = RA.rejectP(1);
          const p2 = RA.rejectP(2);
          const p3 = RA.rejectP(3);
          const actual = [p1, p2, p3];
          const expected = [1, 2, 3];

          try {
            await anyPPonyfill(actual);
            throw new Error('resolving should fail');
          } catch (e) {
            assert.notStrictEqual(e.message, 'resolving should fail');
            assert.instanceOf(e, AggregatedError);
            assert.deepEqual(e.errors, expected);
          }
        }
      );
    });

    context('given list of fulfilled and rejected promises', function () {
      specify('should return first of fulfilled values', async function () {
        const p1 = RA.rejectP(1);
        const p2 = RA.resolveP(2);
        const p3 = RA.rejectP(3);
        const actual = [p1, p2, p3];
        const expected = 2;

        assert.strictEqual(await anyPPonyfill(actual), expected);
      });
    });

    context('given list of values', function () {
      specify('should return first of fulfilled values', async function () {
        const v1 = 1;
        const v2 = 2;
        const v3 = 3;
        const actual = [v1, v2, v3];
        const expected = 1;

        assert.strictEqual(await anyPPonyfill(actual), expected);
      });
    });

    context('given list of values and promises', function () {
      specify('should return first of fulfilled values', async function () {
        const p1 = RA.resolveP(1);
        const v2 = 2;
        const p3 = RA.resolveP(3);
        const actual = [p1, v2, p3];
        const expected = 1;

        assert.strictEqual(await anyPPonyfill(actual), expected);
      });
    });

    context('given large number of promises', function () {
      specify('should handle them properly', async function () {
        const list = R.range(1, 1000);
        const actual = list.map(RA.resolveP);
        const expected = list[0];

        assert.strictEqual(await anyPPonyfill(actual), expected);
      });
    });

    it('should support placeholder to specify "gaps"', async function () {
      const anyP = anyPPonyfill(R.__);
      const p1 = RA.resolveP(1);
      const v2 = 2;
      const p3 = RA.resolveP(3);
      const actual = [p1, v2, p3];
      const expected = 1;

      assert.strictEqual(await anyP(actual), expected);
    });
  });
});

describe('firstP', function () {
  it('should be alias for anyP', function () {
    assert.isTrue(RA.firstP === RA.anyP);
  });
});
