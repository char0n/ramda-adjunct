import { assert } from 'chai';
import { NEL, Nil } from 'monet';
import * as R from 'ramda';

import * as RA from '../src';

describe('concatAll', function () {
  it('should concatenate arrays', function () {
    assert.sameOrderedMembers(RA.concatAll([[1], [2], [3]]), [1, 2, 3]);
  });

  it('should concatenate strings', function () {
    assert.strictEqual(RA.concatAll(['1', '2', '3']), '123');
  });

  it('should concatenate semigroups', function () {
    assert.deepEqual(RA.concatAll([NEL(1), NEL(2)]), NEL(1, NEL(2, Nil)));
  });

  context('given foldable is empty', function () {
    specify('should return undefined', function () {
      assert.isUndefined(RA.concatAll([]));
    });
  });

  context('given foldable contains non-semigroups', function () {
    specify('should throw', function () {
      assert.throws(() => RA.concatAll([1, 2, null, true]), TypeError);
    });
  });

  context('given foldable contains non-compatible semigroups', function () {
    specify('should throw', function () {
      assert.throws(() => RA.concatAll([[1], '1']), TypeError);
    });
  });

  context('given passed non-foldable', function () {
    specify('should return undefined', function () {
      assert.isUndefined(RA.concatAll(null));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const concatAll = RA.concatAll(R.__);

    assert.strictEqual(concatAll(['1', '2', '3']), '123');
  });
});
