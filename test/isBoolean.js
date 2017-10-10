import * as R from 'ramda';
import RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';

describe('isBoolean', function() {
  it('tests a value for `Boolean`', function() {
    eq(RA.isBoolean(true), true);
    eq(RA.isBoolean(false), true);
    eq(RA.isBoolean(Object(true)), true);
    eq(RA.isBoolean(Object(false)), true);

    eq(RA.isBoolean([1, 2, 3]), false);
    eq(RA.isBoolean(new Date()), false);
    eq(RA.isBoolean(new Error()), false);
    eq(RA.isBoolean(R), false);
    eq(RA.isBoolean(RA.isBoolean), false);
    eq(RA.isBoolean({ a: 1 }), false);
    eq(RA.isBoolean(3), false);
    eq(RA.isBoolean(/regex/), false);
    eq(RA.isBoolean('abc'), false);
    eq(RA.isBoolean(Symbol), false);
  });
});
