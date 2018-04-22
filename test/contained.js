import R from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';

describe('contained', function() {
  context('R.contains tests', function() {
    it('returns true if an element is in a list', function() {
      eq(RA.contained([1, 2, 3, 9, 8, 7, 100, 200, 300], 7), true);
    });

    it('returns false if an element is not in a list', function() {
      eq(RA.contained([1, 2, 3, 9, 8, 7, 100, 200, 300], 99), false);
    });

    it('returns false for the empty list', function() {
      eq(RA.contained([], 1), false);
    });

    it('has R.equals semantics', function() {
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

    it('returns true if substring is part of string', function() {
      eq(RA.contained('banana', 'ba'), true);
    });
  });
});
