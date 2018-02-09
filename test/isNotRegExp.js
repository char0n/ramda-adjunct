import * as RA from '../src/index';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';


describe('isNotRegExp', function () {
  it('tests a value for complement of `RegExp`', function () {
    eq(RA.isNotRegExp('a'), true);
    eq(RA.isNotRegExp(1), true);
    eq(RA.isNotRegExp([]), true);
    eq(RA.isNotRegExp({}), true);
    eq(RA.isNotRegExp(true), true);
    eq(RA.isNotRegExp(false), true);
    eq(RA.isNotRegExp(new Error()), true);
    eq(RA.isNotRegExp(new Date()), true);
    eq(RA.isNotRegExp(RA), true);
    eq(RA.isNotRegExp(function () {}), true);
    eq(RA.isNotRegExp(Object(0)), true);
    eq(RA.isNotRegExp(Object('a')), true);
    eq(RA.isNotRegExp(args), true);

    if (Symbol !== 'undefined') {
      eq(RA.isNotRegExp(Symbol), true);
    }

    eq(RA.isNotRegExp(null), true);
    eq(RA.isNotRegExp(undefined), true);

    eq(RA.isNotRegExp(new RegExp()), false);
    eq(RA.isNotRegExp(/x/), false);
    eq(RA.isNotRegExp(/(?:)/), false);
  });
});
