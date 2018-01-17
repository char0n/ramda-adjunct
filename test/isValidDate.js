import * as RA from '../src/index';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';


describe('isValidDate', function () {
  it('tests a value for a valid `Date`', function () {
    eq(RA.isValidDate(new Date()), true);

    eq(RA.isValidDate(new Date('a')), false);
    eq(RA.isValidDate(Date.now()), false);
    eq(RA.isValidDate(args), false);
    eq(RA.isValidDate([1, 2, 3]), false);
    eq(RA.isValidDate(Object(false)), false);
    eq(RA.isValidDate(new Error()), false);
    eq(RA.isValidDate(RA), false);
    eq(RA.isValidDate(Array.prototype.slice), false);
    eq(RA.isValidDate({ a: 1 }), false);
    eq(RA.isValidDate(Object(0)), false);
    eq(RA.isValidDate(/x/), false);
    eq(RA.isValidDate(Object('a')), false);

    if (Symbol !== 'undefined') {
      eq(RA.isValidDate(Symbol), false);
    }

    eq(RA.isValidDate(null), false);
    eq(RA.isValidDate(undefined), false);
  });
});
