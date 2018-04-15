import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('lensTraverse', function() {
  it('should operate on a list of Applicatives', function() {
    const result = R.over(RA.lensTraverse(RA.Identity.of), R.map(R.add(1)), [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([3, 4]);

    assert.deepEqual(result.value, expected.value);
  });

  it('should operate on list of  primitives (numbers)', function() {
    const travFn = x => RA.Identity.of(x + 1);
    const result = R.over(RA.lensTraverse(RA.Identity.of), travFn, [2, 3]);
    const expected = RA.Identity.of([3, 4]);

    assert.deepEqual(result.value, expected.value);
  });

  it('should travers Applicatives left to right', function() {
    const result = R.over(RA.lensTraverse(RA.Identity.of), R.identity, [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([2, 3]);

    assert.deepEqual(result.value, expected.value);
  });

  it('should throw on traversing on non Applicatives (e.g. numbers)', function() {
    const fn = R.over(RA.lensTraverse(RA.Identity.of), R.identity);

    assert.throws(() => fn([2, 3]), TypeError);
  });

  context('should dispatch to sequence function', function() {
    RA.Identity.prototype.sequence = function() {
      return R.map(RA.Identity.of, this.value);
    };

    const result = R.over(
      RA.lensTraverse(R.of),
      R.map(R.add(1)),
      RA.Identity.of([2, 3])
    );
    const expected = [RA.Identity.of(3), RA.Identity.of(4)];

    assert.deepEqual(result, expected);

    delete RA.Identity.prototype.sequence;
  });

  it('should compose', function() {
    const result = R.over(
      R.compose(R.lensProp('prop'), RA.lensTraverse(RA.Identity.of)),
      R.map(R.add(1)),
      {
        prop: [RA.Identity.of(2), RA.Identity.of(3)],
      }
    );
    const expected = {
      prop: RA.Identity.of([3, 4]),
    };

    assert.deepEqual(result, expected);
  });

  context('view', function() {
    specify('should work on list of Applicables', function() {
      const result = R.view(RA.lensTraverse(RA.Identity.of), [
        RA.Identity.of(2),
        RA.Identity.of(3),
      ]);
      const expected = RA.Identity.of([2, 3]);

      assert.deepEqual(result, expected);
    });

    specify('should throw on list of non Applicables', function() {
      const fn = R.view(RA.lensTraverse(RA.Identity.of));

      assert.throws(() => fn([2, 3]));
    });
  });

  it('should be modifiable via set', function() {
    const result = R.set(RA.lensTraverse(RA.Identity.of), RA.Identity.of(2), [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([2, 2]);

    assert.deepEqual(result, expected);
  });
});
