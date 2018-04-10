import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isFalse', function() {
  it("tests whether a value is 'false' primative", function() {
    eq(RA.isFalse(false), true);
    eq(RA.isFalse(Boolean(false)), true);

    eq(RA.isFalse(true), false);
    eq(RA.isFalse(Boolean(true)), false);
    eq(RA.isTrue(new Boolean(true)), false);
    eq(RA.isTrue(new Boolean(false)), false);
    eq(RA.isFalse('false'), false);
    eq(RA.isFalse('abc'), false);
    eq(RA.isFalse(Object('abc')), false);
    eq(RA.isFalse(args), false);
    eq(RA.isFalse([1, 2, 3]), false);
    eq(RA.isFalse(new Date()), false);
    eq(RA.isFalse(new Error()), false);
    eq(RA.isFalse(Array.prototype.slice), false);
    eq(RA.isFalse({ 0: 1, length: 1 }), false);
    eq(RA.isFalse(/x/), false);
    eq(RA.isFalse({}), false);
    eq(RA.isFalse([]), false);
    eq(RA.isFalse(Infinity), false);
    eq(RA.isFalse(-0), false);
    eq(RA.isFalse(0), false);
    eq(RA.isFalse(1), false);
    eq(RA.isFalse(''), false);
    eq(RA.isFalse(null), false);
    eq(RA.isFalse(undefined), false);
    eq(RA.isFalse(NaN), false);

    if (Symbol !== 'undefined') {
      eq(RA.isFalse(Symbol), false);
    }
  });
});
