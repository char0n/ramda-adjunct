import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isTruthy', function() {
  it('tests a value for `truthy`', function() {
    eq(RA.isTruthy('abc'), true);
    eq(RA.isTruthy(Object('abc')), true);
    eq(RA.isTruthy(args), true);
    eq(RA.isTruthy([1, 2, 3]), true);
    eq(RA.isTruthy(true), true);
    eq(RA.isTruthy(new Date()), true);
    eq(RA.isTruthy(new Error()), true);
    eq(RA.isTruthy(Array.prototype.slice), true);
    eq(RA.isTruthy({ 0: 1, length: 1 }), true);
    eq(RA.isTruthy(1), true);
    eq(RA.isTruthy(/x/), true);
    eq(RA.isTruthy(Symbol), RA.isNotUndefined(Symbol));
    eq(RA.isTruthy({}), true);
    eq(RA.isTruthy([]), true);
    eq(RA.isTruthy(Infinity), true);

    eq(RA.isTruthy(false), false);
    eq(RA.isTruthy(0), false);
    eq(RA.isTruthy(-0), false);
    eq(RA.isTruthy(''), false);
    eq(RA.isTruthy(null), false);
    eq(RA.isTruthy(undefined), false);
    eq(RA.isTruthy(NaN), false);
  });
});
