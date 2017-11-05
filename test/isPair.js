import * as RA from '../src/index';
import eq from './shared/eq';


describe('isPair', function() {
  it('tests a value for pair', function() {
    eq(RA.isPair([]), false);
    eq(RA.isPair([0]), false);
    eq(RA.isPair([0, 1]), true);
    eq(RA.isPair([0, 1, 2]), false);
    eq(RA.isPair(0), false);
    eq(RA.isPair(''), false);
    eq(RA.isPair('foo'), false);
    eq(RA.isPair(false), false);
    eq(RA.isPair(true), false);
    eq(RA.isPair(new Date()), false);
    eq(RA.isPair({ 0: 0, 1: 1 }), false);
    eq(RA.isPair({ foo: 0, bar: 1 }), false);
  });
});
