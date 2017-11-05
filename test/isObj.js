import * as RA from '../src/index';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isObj', function() {
  it('tests a value for language type of `Object`', function() {
    eq(RA.isObj({}), true);
    eq(RA.isObj(Object(true)), true);
    eq(RA.isObj(Object.create(null)), true);
    eq(RA.isObj(args), true);
    eq(RA.isObj([1, 2, 3]), true);
    eq(RA.isObj(Object(false)), true);
    eq(RA.isObj(new Date()), true);
    eq(RA.isObj(new Error()), true);
    eq(RA.isObj(RA), true);
    eq(RA.isObj(Array.prototype.slice), true);
    eq(RA.isObj({ a: 1 }), true);
    eq(RA.isObj(Object(0)), true);
    eq(RA.isObj(/x/), true);
    eq(RA.isObj(Object('a')), true);
    eq(RA.isObj(Symbol), typeof Symbol !== 'undefined');

    eq(RA.isObj(null), false);
    eq(RA.isObj(undefined), false);
  });
});

describe('isObject', function() {
  it('tests an alias', function() {
    eq(RA.isObj === RA.isObject, true);
  });
});
