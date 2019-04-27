import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNegative', function() {
  it('should test value for a negative `Number`', function() {
    eq(RA.isNegative(0), false);
    eq(RA.isNegative(-0.1), true);
    eq(RA.isNegative(Object(0)), false);
    eq(RA.isNegative(Object(-0.1)), true);
    eq(RA.isNegative(NaN), false);
    eq(RA.isNegative(Infinity), false);
    eq(RA.isNegative(-Infinity), true);
    eq(RA.isNegative(MAX_SAFE_INTEGER), false);
    eq(RA.isNegative(MIN_SAFE_INTEGER), true);
    eq(RA.isNegative(Number.MAX_VALUE), false);
    eq(RA.isNegative(Number.MIN_VALUE), false);

    eq(RA.isNegative(new Date()), false);
    eq(RA.isNegative(args), false);
    eq(RA.isNegative([1, 2, 3]), false);
    eq(RA.isNegative(Object(false)), false);
    eq(RA.isNegative(new Error()), false);
    eq(RA.isNegative(RA), false);
    eq(RA.isNegative(Array.prototype.slice), false);
    eq(RA.isNegative({ a: 1 }), false);
    eq(RA.isNegative(/x/), false);
    eq(RA.isNegative(Object('a')), false);

    if (Symbol !== 'undefined') {
      eq(RA.isNegative(Symbol), false);
    }

    eq(RA.isNegative(null), false);
    eq(RA.isNegative(undefined), false);
  });

  it('should support placeholder to specify "gaps"', function() {
    const isNegative = RA.isNegative(R.__);

    assert.isTrue(isNegative(-1));
  });
});
