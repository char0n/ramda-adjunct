import RA from '../src/index';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isObject', function() {
  it('tests a value for language type of `Object`', function() {
    eq(RA.isObject({}), true);
    eq(RA.isObject(Object(true)), true);
    eq(RA.isObject(Object.create(null)), true);
    eq(RA.isObject(args), true);
    eq(RA.isObject([1, 2, 3]), true);
    eq(RA.isObject(Object(false)), true);
    eq(RA.isObject(new Date()), true);
    eq(RA.isObject(new Error()), true);
    eq(RA.isObject(RA), true);
    eq(RA.isObject(Array.prototype.slice), true);
    eq(RA.isObject({ a: 1 }), true);
    eq(RA.isObject(Object(0)), true);
    eq(RA.isObject(/x/), true);
    eq(RA.isObject(Object('a')), true);
    eq(RA.isObject(Symbol), typeof Symbol !== 'undefined');

    eq(RA.isObject(null), false);
    eq(RA.isObject(undefined), false);
  });
});
