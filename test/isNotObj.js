import RA from '../src/index';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotObj', function() {
  it('tests a value for complement of language type of `Object`', function() {
    eq(RA.isNotObj({}), false);
    eq(RA.isNotObj(Object(false)), false);
    eq(RA.isNotObj(Object.create(null)), false);
    eq(RA.isNotObj(args), false);
    eq(RA.isNotObj([1, 2, 3]), false);
    eq(RA.isNotObj(Object(false)), false);
    eq(RA.isNotObj(new Date()), false);
    eq(RA.isNotObj(new Error()), false);
    eq(RA.isNotObj(RA), false);
    eq(RA.isNotObj(Array.prototype.slice), false);
    eq(RA.isNotObj({ a: 1 }), false);
    eq(RA.isNotObj(Object(0)), false);
    eq(RA.isNotObj(/x/), false);
    eq(RA.isNotObj(Object('a')), false);
    eq(RA.isNotObj(Symbol), typeof Symbol === 'undefined');

    eq(RA.isNotObj(null), true);
    eq(RA.isNotObj(undefined), true);
  });
});

describe('isNotObject', function() {
  it('tests an alias', function() {
    eq(RA.isNotObj === RA.isNotObject, true);
  });
});
