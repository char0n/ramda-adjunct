import * as R from 'ramda';
import { assert } from 'chai';
import { Maybe } from 'monet';

import * as RA from '../src/index.js';

describe('lensTraverse', function () {
  it('should operate on a list of Applicatives', function () {
    const result = R.over(RA.lensTraverse(RA.Identity), R.map(R.add(1)), [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([3, 4]);

    assert.deepEqual(result.value, expected.value);
  });

  it('should operate on a list of Maybes', function () {
    const result = R.over(RA.lensTraverse(Maybe), R.map(R.add(1)), [
      Maybe.Just(2),
      Maybe.Just(3),
    ]);
    const expected = Maybe.Just([3, 4]);

    assert.deepEqual(result, expected);
  });

  it('should operate on a list of primitives (numbers)', function () {
    const travFn = (x) => RA.Identity.of(x + 1);
    const result = R.over(RA.lensTraverse(RA.Identity), travFn, [2, 3]);
    const expected = RA.Identity.of([3, 4]);

    assert.deepEqual(result.value, expected.value);
  });

  it('should traverse Applicatives left to right', function () {
    const result = R.over(RA.lensTraverse(RA.Identity), R.identity, [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([2, 3]);

    assert.deepEqual(result.value, expected.value);
  });

  it('should throw on traversing on non Applicatives (e.g. numbers)', function () {
    const fn = R.over(RA.lensTraverse(RA.Identity), R.identity);

    assert.throws(() => fn([2, 3]), TypeError);
  });

  it('should dispatch to traverse function', function () {
    class TraversableArray extends Array {
      // eslint-disable-next-line class-methods-use-this
      traverse() {
        return 'traversed';
      }
    }

    const result = R.over(
      RA.lensTraverse(RA.Identity),
      R.identity,
      new TraversableArray(RA.Identity.of(2), RA.Identity.of(3))
    );

    assert.strictEqual(result, 'traversed');
  });

  it('should dispatch to fantasy-land/traverse function', function () {
    class TraversableArray extends Array {
      // eslint-disable-next-line class-methods-use-this
      ['fantasy-land/traverse']() {
        return 'traversed';
      }
    }

    const result = R.over(
      RA.lensTraverse(RA.Identity),
      R.identity,
      new TraversableArray(RA.Identity.of(2), RA.Identity.of(3))
    );

    assert.strictEqual(result, 'traversed');
  });

  it('should be composable', function () {
    const result = R.over(
      R.compose(R.lensProp('prop'), RA.lensTraverse(RA.Identity)),
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

  it('should work on list of Applicatives', function () {
    const result = R.view(RA.lensTraverse(RA.Identity), [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([2, 3]);

    assert.deepEqual(result, expected);
  });

  it('should throw on list of non Applicatives', function () {
    const fn = R.view(RA.lensTraverse(RA.Identity));

    assert.throws(() => fn([2, 3]));
  });

  it('should be modifiable via set', function () {
    const result = R.set(RA.lensTraverse(RA.Identity), RA.Identity.of(2), [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([2, 2]);

    assert.deepEqual(result, expected);
  });

  it('should support placeholder to specify "gaps"', function () {
    const lensTraverse = RA.lensTraverse(R.__);

    const result = R.over(lensTraverse(RA.Identity), R.map(R.add(1)), [
      RA.Identity.of(2),
      RA.Identity.of(3),
    ]);
    const expected = RA.Identity.of([3, 4]);

    assert.deepEqual(result.value, expected.value);
  });
});
