import * as RA from '../src';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isSet', function() {
  it('tests a value for type of `Set`', function() {
    eq(RA.isSet('abc'), false);
    eq(RA.isSet(Object('abc')), false);

    eq(RA.isSet(args), false);
    eq(RA.isSet([1, 2, 3]), false);
    eq(RA.isSet(true), false);
    eq(RA.isSet({ 0: 1, length: 1 }), false);
    eq(RA.isSet(1), false);
    eq(RA.isSet(/x/), false);
    eq(RA.isSet(Symbol), false);
    eq(RA.isSet(new Date()), false);
    eq(RA.isSet(new Error()), false);
    eq(RA.isSet(Array.prototype.slice), false);
    eq(RA.isSet(new Set()), true);
    eq(RA.isSet(new Set([1, 2])), true);
  });
});
