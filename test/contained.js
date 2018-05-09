import * as R from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';

describe('contained', function() {
  it('should return true if an element is in a list', function() {
    eq(RA.contained([1, 2, 3, 9, 8, 7, 100, 200, 300], 7), true);
  });

  it('should return false if an element is not in a list', function() {
    eq(RA.contained([1, 2, 3, 9, 8, 7, 100, 200, 300], 99), false);
  });

  it('should return false for the empty list', function() {
    eq(RA.contained([], 1), false);
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

  it('should return true if substring is part of string', function() {
    eq(RA.contained('banana', 'ba'), true);
  });

  it('should be curried', function() {
    eq(RA.contained('abcd', 'b'), true);
    eq(RA.contained('abcd')('b'), true);
  });
});
