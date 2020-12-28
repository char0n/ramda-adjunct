import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('overlaps', function () {
  context('given two intersecting lists', function () {
    specify('should return true', function () {
      assert.isTrue(RA.overlaps([1], [1]));
      assert.isTrue(RA.overlaps([1, 2], [1]));
      assert.isTrue(RA.overlaps([1, 2], [2]));
      assert.isTrue(RA.overlaps([1, 2], [1, 2]));
      assert.isTrue(RA.overlaps([1, null], [1]));
      assert.isTrue(RA.overlaps([1, null], [null]));
      assert.isTrue(RA.overlaps([undefined], [undefined, null]));
      assert.isTrue(RA.overlaps([{}, []], [{}]));
      assert.isTrue(RA.overlaps([{}, [1, 2]], [[1, 2]]));
      assert.isTrue(RA.overlaps([{}, []], [[]]));
      assert.isTrue(RA.overlaps([{ key: 'value' }, []], [{ key: 'value' }]));
      assert.isTrue(
        RA.overlaps(['-v', '--verbose'], ['node', 'script.js', '-v'])
      );
    });
  });

  context('given lists of intersecting functions', function () {
    specify('should find overlap', function () {
      /**
       * In ramda@0.22.x, R.intersection function returns empty results
       * for intersecting functions. We assume it's probably a bug,
       * so we compensate for it with our test code.
       */
      const fn = () => {};
      const actual = RA.overlaps([undefined, fn], [fn]);
      const expected = R.intersection([fn], [fn]);

      assert.strictEqual(actual, expected.length === 1);
    });
  });

  context('given two disjunctive lists', function () {
    specify('should return false', function () {
      assert.isFalse(RA.overlaps([1, 2], []));
      assert.isFalse(RA.overlaps([{}], [[]]));
      assert.isFalse(RA.overlaps([{}], [{ key: 'value' }]));
      assert.isFalse(RA.overlaps([{ key: 'value' }], [{ key: 'value2' }]));
      assert.isFalse(RA.overlaps(['-v', '--verbose'], []));
      assert.isFalse(RA.overlaps([() => 'hi'], [() => 'hi']));
    });
  });

  context('given two empty lists', function () {
    specify('should return true', function () {
      assert.isTrue(RA.overlaps([], []));
    });
  });

  context('given empty list as first argument', function () {
    specify('should return true', function () {
      assert.isTrue(RA.overlaps([], [1]));
    });
  });

  it('should curry', function () {
    assert.isTrue(RA.overlaps([1], [1]));
    assert.isTrue(RA.overlaps([1])([1]));
  });
});
