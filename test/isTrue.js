import * as RA from '../src';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isTrue', function() {
  it("tests whether a value is 'true' primative", function() {
    eq(RA.isTrue(true), true);
    eq(RA.isTrue(Boolean(true)), true);

    eq(RA.isTrue(false), false);
    eq(RA.isTrue(Boolean(false)), false);
    eq(RA.isTrue(new Boolean(true)), false);
    eq(RA.isTrue(new Boolean(false)), false);
    eq(RA.isTrue('true'), false);
    eq(RA.isTrue('abc'), false);
    eq(RA.isTrue(Object('abc')), false);
    eq(RA.isTrue(args), false);
    eq(RA.isTrue([1, 2, 3]), false);
    eq(RA.isTrue(new Date()), false);
    eq(RA.isTrue(new Error()), false);
    eq(RA.isTrue(Array.prototype.slice), false);
    eq(RA.isTrue({ 0: 1, length: 1 }), false);
    eq(RA.isTrue(/x/), false);
    eq(RA.isTrue({}), false);
    eq(RA.isTrue([]), false);
    eq(RA.isTrue(Infinity), false);
    eq(RA.isTrue(-0), false);
    eq(RA.isTrue(0), false);
    eq(RA.isTrue(1), false);
    eq(RA.isTrue(''), false);
    eq(RA.isTrue(null), false);
    eq(RA.isTrue(undefined), false);
    eq(RA.isTrue(NaN), false);

    if (Symbol !== 'undefined') {
      eq(RA.isTrue(Symbol), false);
    }
  });
});
