import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('lensTraverse', function() {
  it('should operate on a list of applicatives', function() {
    const result = R.over(RA.lensTraverse(RA.Identity.of), R.map(R.add(1)), [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([3, 4]);

    assert.deepEqual(result.value, expected.value);
  });

  it('should travers left to right', function() {
    const result = R.over(RA.lensTraverse(RA.Identity.of), R.identity, [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([2, 3]);

    assert.deepEqual(result.value, expected.value);
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

  it('should be curried', function() {
    const toFunctorFn = x => RA.Identity.of(R.map(R.add(1), x));
    const target = [RA.Identity.of(1)];

    assert.isObject(RA.lensTraverse(RA.Identity.of)(toFunctorFn)(target));
    assert.isObject(RA.lensTraverse(RA.Identity.of, toFunctorFn)(target));
    assert.isObject(RA.lensTraverse(RA.Identity.of)(toFunctorFn, target));
    assert.isObject(RA.lensTraverse(RA.Identity.of, toFunctorFn, target));
  });
});
