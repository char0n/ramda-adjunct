import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';


describe('isString', function() {
  it('tests a value for `String`', function() {
    eq(RA.isString('abc'), true);
    eq(RA.isString(Object('abc')), true);

    eq(RA.isString(args), false);
    eq(RA.isString([1, 2, 3]), false);
    eq(RA.isString(true), false);
    eq(RA.isString(new Date()), false);
    eq(RA.isString(new Error()), false);
    eq(RA.isString(Array.prototype.slice), false);
    eq(RA.isString({ 0: 1, length: 1 }), false);
    eq(RA.isString(1), false);
    eq(RA.isString(/x/), false);
    eq(RA.isString(Symbol), false);
  });
});
