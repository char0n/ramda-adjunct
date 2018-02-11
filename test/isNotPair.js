import * as RA from '../src/index';
import eq from './shared/eq';

describe('isNotPair', function() {
  it('tests a value for complement of pair', function() {
    eq(RA.isNotPair([]), true);
    eq(RA.isNotPair([0]), true);
    eq(RA.isNotPair([0, 1]), false);
    eq(RA.isNotPair([0, 1, 2]), true);
    eq(RA.isNotPair(0), true);
    eq(RA.isNotPair(''), true);
    eq(RA.isNotPair('foo'), true);
    eq(RA.isNotPair(false), true);
    eq(RA.isNotPair(true), true);
    eq(RA.isNotPair(new Date()), true);
    eq(RA.isNotPair({ 0: 0, 1: 1 }), true);
    eq(RA.isNotPair({ foo: 0, bar: 1 }), true);
  });
});
