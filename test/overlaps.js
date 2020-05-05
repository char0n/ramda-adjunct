import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('overlaps', function () {
  context('given two intersecting lists', function () {
    it('should return true', function () {
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

      const func = () => 'hi';
      assert.isTrue(RA.overlaps([undefined, func], [func]));
    });
  });

  context('given two disjunct lists', function () {
    it('should return false', function () {
      assert.isFalse(RA.overlaps([1, 2], []));
      assert.isFalse(RA.overlaps([{}], [[]]));
      assert.isFalse(RA.overlaps([{}], [{ key: 'value' }]));
      assert.isFalse(RA.overlaps([{ key: 'value' }], [{ key: 'value2' }]));
      assert.isFalse(RA.overlaps(['-v', '--verbose'], []));
      assert.isFalse(RA.overlaps([() => 'hi'], [() => 'hi']));
    });
  });

  it('should support currying', function () {
    let overlaps = RA.overlaps(R.__);

    assert.isTrue(overlaps([1], [1, 2]));

    overlaps = RA.overlaps([1]);

    assert.isTrue(overlaps([1, 2]));
  });
});
