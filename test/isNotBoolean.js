import * as R from 'ramda';
import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';

describe('isNotBoolean', function() {
  it('tests a value for complement of `Boolean`', function() {
    eq(RA.isNotBoolean(true), false);
    eq(RA.isNotBoolean(false), false);
    eq(RA.isNotBoolean(Object(true)), false);
    eq(RA.isNotBoolean(Object(false)), false);

    eq(RA.isNotBoolean([1, 2, 3]), true);
    eq(RA.isNotBoolean(new Date()), true);
    eq(RA.isNotBoolean(new Error()), true);
    eq(RA.isNotBoolean(R), true);
    eq(RA.isNotBoolean(RA.isNotBoolean), true);
    eq(RA.isNotBoolean({ a: 1 }), true);
    eq(RA.isNotBoolean(3), true);
    eq(RA.isNotBoolean(/regex/), true);
    eq(RA.isNotBoolean('abc'), true);
    eq(RA.isNotBoolean(Symbol), true);
  });
});
