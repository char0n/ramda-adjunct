import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('included', function () {
  context('given element is in the list', function () {
    specify('should return true', function () {
      assert.isTrue(RA.included([1, 2, 3, 9, 8, 7, 100, 200, 300], 7));
    });
  });

  context('given element is not in the list', function () {
    specify('should return false', function () {
      assert.isFalse(RA.included([1, 2, 3, 9, 8, 7, 100, 200, 300], 99));
    });
  });

  context('given empty list', function () {
    specify('should return false', function () {
      assert.isFalse(RA.included([], 1));
    });
  });

  it('should have R.equals semantics', function () {
    function Just(x) {
      this.value = x;
    }
    Just.prototype.equals = function (x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    assert.isFalse(RA.included([-0], 0));
    assert.isFalse(RA.included([0], -0));
    assert.isTrue(RA.included([NaN], NaN));
    assert.isTrue(RA.included([new Just([42])], new Just([42])));
  });

  context('given substring is part of string', function () {
    it('should return true', function () {
      assert.isTrue(RA.included('banana', 'ba'));
    });
  });

  it('should be curried', function () {
    assert.isTrue(RA.included('abcd', 'b'));
    assert.isTrue(RA.included('abcd')('b'));
  });
});
