import RA from '../src/index';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotValidDate', function() {
  it('tests a value for complement of valid `Date`', function() {
    eq(RA.isNotValidDate(new Date()), false);

    eq(RA.isNotValidDate(new Date('a')), true);
    eq(RA.isNotValidDate(Date.now()), true);
    eq(RA.isNotValidDate(args), true);
    eq(RA.isNotValidDate([1, 2, 3]), true);
    eq(RA.isNotValidDate(Object(true)), true);
    eq(RA.isNotValidDate(new Error()), true);
    eq(RA.isNotValidDate(RA), true);
    eq(RA.isNotValidDate(Array.prototype.slice), true);
    eq(RA.isNotValidDate({ a: 1 }), true);
    eq(RA.isNotValidDate(Object(0)), true);
    eq(RA.isNotValidDate(/x/), true);
    eq(RA.isNotValidDate(Object('a')), true);

    if (Symbol !== 'undefined') {
      eq(RA.isNotValidDate(Symbol), true);
    }

    eq(RA.isNotValidDate(null), true);
    eq(RA.isNotValidDate(undefined), true);
  });
});

describe('isInvalidDate', function() {
  it('tests an alias', function() {
    eq(RA.isNotValidDate === RA.isInvalidDate, true);
  });
});
