import * as RA from '../src/index';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';


describe('isRegExp', function () {
  it('tests a value for `RegExp`', function () {
    eq(RA.isRegExp(new RegExp()), true);
    eq(RA.isRegExp(/x/), true);
    eq(RA.isRegExp(/(?:)/), true);

    eq(RA.isRegExp('a'), false);
    eq(RA.isRegExp(1), false);
    eq(RA.isRegExp([]), false);
    eq(RA.isRegExp({}), false);
    eq(RA.isRegExp(true), false);
    eq(RA.isRegExp(false), false);
    eq(RA.isRegExp(new Error()), false);
    eq(RA.isRegExp(new Date()), false);
    eq(RA.isRegExp(function () {}), false);
    eq(RA.isRegExp(Object(0)), false);
    eq(RA.isRegExp(Object('a')), false);
    eq(RA.isRegExp(Object(false)), false);
    eq(RA.isRegExp(RA), false);
    eq(RA.isRegExp(args), false);


    if (Symbol !== 'undefined') {
      eq(RA.isRegExp(Symbol), false);
    }

    eq(RA.isRegExp(null), false);
    eq(RA.isRegExp(undefined), false);
  });
});
