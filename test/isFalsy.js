import * as R from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isFalsy', function() {
  context('given falsy value', function() {
    specify('should return true', function() {
      eq(RA.isFalsy(false), true);
      eq(RA.isFalsy(0), true);
      eq(RA.isFalsy(-0), true);
      eq(RA.isFalsy(''), true);
      eq(RA.isFalsy(null), true);
      eq(RA.isFalsy(undefined), true);
      eq(RA.isFalsy(NaN), true);
    });
  });

  context('given truthy value', function() {
    specify('should return false', function() {
      eq(RA.isFalsy('abc'), false);
      eq(RA.isFalsy(Object('abc')), false);
      eq(RA.isFalsy(args), false);
      eq(RA.isFalsy([1, 2, 3]), false);
      eq(RA.isFalsy(new Date()), false);
      eq(RA.isFalsy(new Error()), false);
      eq(RA.isFalsy(Array.prototype.slice), false);
      eq(RA.isFalsy({ 0: 1, length: 1 }), false);
      eq(RA.isFalsy(1), false);
      eq(RA.isFalsy(/x/), false);
      eq(RA.isFalsy(Symbol), RA.isUndefined(Symbol));
      eq(RA.isFalsy({}), false);
      eq(RA.isFalsy([]), false);
      eq(RA.isFalsy(Infinity), false);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const isFalsy = RA.isFalsy(R.__);

    eq(isFalsy(null), true);
  });
});
