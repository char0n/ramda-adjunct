import { assert } from 'chai';
import { NEL, Nil } from 'monet';
import * as R from 'ramda';

import * as RA from '../src';
import eq from './shared/eq';

describe('concatAll', function() {
  it('should concatenate arrays', function() {
    eq(RA.concatAll([[1], [2], [3]]), [1, 2, 3]);
  });

  it('should concatenate strings', function() {
    eq(RA.concatAll(['1', '2', '3']), '123');
  });

  it('should concatenate semigroups', function() {
    eq(RA.concatAll([NEL(1), NEL(2)]), NEL(1, NEL(2, Nil)));
  });

  context('given foldable is empty', function() {
    specify('should returns undefined', function() {
      eq(RA.concatAll([]), undefined);
    });
  });

  context('given foldable contains non-semigroups', function() {
    specify('should throw', function() {
      assert.throws(() => RA.concatAll([1, 2, null, true]), TypeError);
    });
  });

  /*
  // fails on Ramda 0.21
  context('given foldable contains non-compatible semigroups', function() {
    specify('should throw', function() {
      assert.throws(() => RA.concatAll([[1], '1']), TypeError);
    });
  });
  */

  context('given passed non-foldable', function() {
    specify('should throw', function() {
      assert.throws(() => RA.concatAll(null), TypeError);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const concatAll = RA.concatAll(R.__);

    eq(concatAll(['1', '2', '3']), '123');
  });
});
