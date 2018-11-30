import * as R from 'ramda';

import * as RA from '../src';
import eq from './shared/eq';

describe('contained', function() {
  context('given element is in the list', function() {
    specify('should return true', function() {
      eq(RA.contained([1, 2, 3, 9, 8, 7, 100, 200, 300], 7), true);
    });
  });

  context('given element is not in the list', function() {
    specify('should return false', function() {
      eq(RA.contained([1, 2, 3, 9, 8, 7, 100, 200, 300], 99), false);
    });
  });

  context('given empty list', function() {
    specify('should return false', function() {
      eq(RA.contained([], 1), false);
    });
  });

  it('should have R.equals semantics', function() {
    function Just(x) {
      this.value = x;
    }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    eq(RA.contained([-0], 0), false);
    eq(RA.contained([0], -0), false);
    eq(RA.contained([NaN], NaN), true);
    eq(RA.contained([new Just([42])], new Just([42])), true);
  });

  context('given substring is part of string', function() {
    it('should return true', function() {
      eq(RA.contained('banana', 'ba'), true);
    });
  });

  it('should be curried', function() {
    eq(RA.contained('abcd', 'b'), true);
    eq(RA.contained('abcd')('b'), true);
  });
});
