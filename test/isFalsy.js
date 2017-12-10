import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';


describe('isFalsy', function() {
  it('tests a value for `falsy`', function() {
    eq(RA.isFalsy(false), true);
    eq(RA.isFalsy(0), true);
    eq(RA.isFalsy(''), true);
    eq(RA.isFalsy(null), true);
    eq(RA.isFalsy(undefined), true);
    eq(RA.isFalsy(NaN), true);

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
